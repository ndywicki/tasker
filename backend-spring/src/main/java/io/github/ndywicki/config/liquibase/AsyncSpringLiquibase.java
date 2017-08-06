package io.github.ndywicki.config.liquibase;

import io.github.ndywicki.config.TaskerConstants;
import liquibase.exception.LiquibaseException;
import liquibase.integration.spring.SpringLiquibase;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.env.Environment;
import org.springframework.core.task.TaskExecutor;
import org.springframework.util.StopWatch;

/**
 * Created by Nicolas Dywicki on 23/07/2017.
 */
public class AsyncSpringLiquibase extends SpringLiquibase {

    private final Logger logger = LoggerFactory.getLogger(AsyncSpringLiquibase.class);
    private final TaskExecutor taskExecutor;
    private final Environment env;

    public AsyncSpringLiquibase(@Qualifier("taskExecutor") TaskExecutor taskExecutor, Environment env) {
        this.taskExecutor = taskExecutor;
        this.env = env;
    }

    @Override
    public void afterPropertiesSet() throws LiquibaseException {
        if (!env.acceptsProfiles(TaskerConstants.SPRING_PROFILE_NO_LIQUIBASE)) {
            if (env.acceptsProfiles(TaskerConstants.SPRING_PROFILE_DEVELOPMENT)) {
                taskExecutor.execute(() -> {
                    try {
                        logger.warn("Starting Liquibase asynchronously, your database might not be ready at startup!");
                        initDb();
                    } catch (LiquibaseException e) {
                        logger.error("Liquibase could not start correctly, your database is NOT ready: {}", e
                            .getMessage(), e);
                    }
                });
            } else {
                logger.debug("Starting Liquibase synchronously");
                initDb();
            }
        } else {
            logger.debug("Liquibase is disabled");
        }
    }

    protected void initDb() throws LiquibaseException {
        StopWatch watch = new StopWatch();
        watch.start();
        super.afterPropertiesSet();
        watch.stop();
        logger.debug("Liquibase has updated your database in {} ms", watch.getTotalTimeMillis());
        if (watch.getTotalTimeMillis() > 5_000) {
            logger.warn("Warning, Liquibase took more than 5 seconds to start up!");
        }
    }
}
