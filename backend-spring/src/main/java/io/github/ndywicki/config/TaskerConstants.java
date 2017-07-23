package io.github.ndywicki.config;

/**
 * Created by Nicolas Dywicki on 23/07/2017.
 */
public final class TaskerConstants {
    // Spring profiles for development, test and production
    public static final String SPRING_PROFILE_DEVELOPMENT = "dev";
    public static final String SPRING_PROFILE_TEST = "test";
    public static final String SPRING_PROFILE_PRODUCTION = "prod";
    // Spring profile used to disable running liquibase
    public static final String SPRING_PROFILE_NO_LIQUIBASE = "no-liquibase";

    private TaskerConstants() {
    }
}
