package pl.com.psl.angular4.addressbook.util.search;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.PathBuilder;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by psl on 28.10.17
 */
public class SearchExpressionProvider<T> {

    private PathBuilder<T> pathBuilder;

    public SearchExpressionProvider(Class<T> clazz, String entityVariableName) {
        this.pathBuilder = new PathBuilder<>(clazz, entityVariableName);
    }

    public BooleanExpression createExpression(Map<String, Object> parameters) {
        List<BooleanExpression> expressions = new ArrayList<>(parameters.size());
        parameters.forEach((parameterName, parameterValue) -> {
            BooleanExpression expression;
            if (parameterValue instanceof String) {
                expression = pathBuilder.getString(parameterName).containsIgnoreCase((String) parameterValue);
            } else {
                expression = pathBuilder.get(parameterName).eq(parameterValue);
            }
            expressions.add(expression);

        });
        return expressions.stream().reduce(expressions.get(0), BooleanExpression::and);
    }
}
