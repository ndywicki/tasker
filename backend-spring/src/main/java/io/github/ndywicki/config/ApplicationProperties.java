package io.github.ndywicki.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.cors.CorsConfiguration;

/**
 * Properties specific to Tasker.
 * <p>
 * Properties are configured in the application.yml file.
 * Created by Nicolas Dywicki on 23/07/2017.
 */
@Getter @Setter
@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {

    private final Async async = new Async();

    private final CorsConfiguration cors = new CorsConfiguration();

    @Getter
    @Setter
    public static class Async {
        private int corePoolSize = 2;
        private int maxPoolSize = 50;
        private int queueCapacity = 10000;
    }

}
