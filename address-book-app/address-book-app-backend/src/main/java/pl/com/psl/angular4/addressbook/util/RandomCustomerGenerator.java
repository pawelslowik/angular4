package pl.com.psl.angular4.addressbook.util;

import org.springframework.stereotype.Component;
import pl.com.psl.angular4.addressbook.entity.Customer;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by psl on 15.10.17
 */
@Component
public class RandomCustomerGenerator {

    private static final String[] NAMES = {"bob", "tom", "max", "pat", "tim", "ken", "joe"};
    private static final String[] ADDRESSES = {"warsaw", "berlin", "gdansk", "wroclaw", "krakow", "london"};
    private ThreadLocalRandom threadLocalRandom = ThreadLocalRandom.current();

    public List<Customer> generate(int count){
        return Stream.generate(() -> {
            String generatedName = NAMES[threadLocalRandom.nextInt(NAMES.length)];
            String generatedAddress = ADDRESSES[threadLocalRandom.nextInt(ADDRESSES.length)];
            String generatedPhoneNumber = threadLocalRandom
                    .ints(9, 0, 10)
                    .mapToObj(String::valueOf)
                    .reduce("", String::concat);
            return new Customer(generatedName, generatedAddress, generatedPhoneNumber);
        }).limit(count).collect(Collectors.toList());
    }
}
