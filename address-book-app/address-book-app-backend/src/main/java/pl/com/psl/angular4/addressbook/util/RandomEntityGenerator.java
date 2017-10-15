package pl.com.psl.angular4.addressbook.util;

import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Created by psl on 15.10.17
 */
public abstract class RandomEntityGenerator<T> {

    private final String[] NAMES = {"bob", "tom", "max", "pat", "tim", "ken", "joe", "ben", "sam", "jim", "rob"};
    private final String[] ADDRESSES = {"warsaw", "berlin", "gdansk", "wroclaw", "krakow", "london", "hamburg", "chicago"};
    private ThreadLocalRandom threadLocalRandom = ThreadLocalRandom.current();

    public List<T> generate(int count){
        return Stream.generate(supplyRandomEntity())
                .limit(count)
                .collect(Collectors.toList());
    }

    public abstract Supplier<T> supplyRandomEntity();

    String generateName(){
        return NAMES[threadLocalRandom.nextInt(NAMES.length)];
    }

    String generateAddress(){
        return ADDRESSES[threadLocalRandom.nextInt(ADDRESSES.length)];
    }

    String generatePhoneNumber(){
        return threadLocalRandom
                .ints(9, 0, 10)
                .mapToObj(String::valueOf)
                .reduce("", String::concat);
    }

    String generateEntityId(String prefix){
        return threadLocalRandom
                .ints(6, 0, 10)
                .mapToObj(String::valueOf)
                .reduce(prefix, String::concat);
    }
}
