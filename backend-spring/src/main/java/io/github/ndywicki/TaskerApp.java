package io.github.ndywicki;

import io.github.ndywicki.config.ApplicationProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.env.Environment;

@ComponentScan
@EnableAutoConfiguration
@EnableConfigurationProperties({LiquibaseProperties.class, ApplicationProperties.class})
public class TaskerApp {

    private static final Logger log = LoggerFactory.getLogger(TaskerApp.class);

	public static void main(String[] args) {
        SpringApplication app = new SpringApplication(TaskerApp.class);
        Environment env = app.run(args).getEnvironment();
        log.info("Application '{}' running at http://localhost:{}",
            env.getProperty("spring.application.name"),
            env.getProperty("server.port"));
	}
}
