package io.github.ndywicki.security;

/**
 * Constants for Spring Security authorities.
 *
 * Created by Nicolas Dywicki on 23/07/2017.
 */
public final class AuthoritiesConstants {

    public static final String ADMIN = "ROLE_ADMIN";

    public static final String USER = "ROLE_USER";

    public static final String ANONYMOUS = "ROLE_ANONYMOUS";

    private AuthoritiesConstants() {
    }
}
