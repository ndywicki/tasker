package io.github.ndywicki.service;

import io.github.ndywicki.domain.User;
import io.github.ndywicki.repository.UserRepository;
import io.github.ndywicki.security.SecurityUtils;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service class for managing users.
 */
@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public final JdbcTokenStore jdbcTokenStore;


    public UserService(UserRepository userRepository, JdbcTokenStore jdbcTokenStore) {
        this.userRepository = userRepository;
        this.jdbcTokenStore = jdbcTokenStore;
    }

    @Transactional(readOnly = true)
    public User getUserWithAuthorities() {
        return userRepository.findOneWithAuthoritiesByLogin(SecurityUtils.getCurrentUserLogin()).orElse(null);
    }
}
