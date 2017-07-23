package io.github.ndywicki.domain.util;

import org.hibernate.dialect.H2Dialect;

import java.sql.Types;

/**
 * Created by Nicolas Dywicki on 23/07/2017.
 */
public class FixedH2Dialect extends H2Dialect {

    public FixedH2Dialect() {
        super();
        registerColumnType(Types.FLOAT, "real");
    }
}
