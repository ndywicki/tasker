package io.github.ndywicki.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Properties specific to Tasker.
 * <p>
 * Properties are configured in the application.yml file.
 */
@Getter @Setter
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    private final Async async = new Async();

    @Getter
    @Setter
    public static class Async {
        private int corePoolSize = 2;
        private int maxPoolSize = 50;
        private int queueCapacity = 10000;
    }

}
