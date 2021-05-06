package com.yysoul.springboottest;

import com.yysoul.springboottest.entity.Book;
import com.yysoul.springboottest.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.RequestBody;

@SpringBootTest
class SpringboottestApplicationTests {
    @Autowired
    private BookRepository repository;

    @Test
    void contextLoads() {
    }

    @Test
    void save(){
        Book book = new Book();
        book.setName("Spring Boot");
        book.setAuthor("张三");
        Book book1 = repository.save(book);
        System.out.println(book1);
    }

    @Test
    void findById(){
        Book book = repository.findById(1).get();
        System.out.println(book);
    }

    @Test
    void update() {
        Book book = new Book();
        book.setId(132);
        book.setName("test 23");
        Book book1 = repository.save(book);
        System.out.println(book1);
    }

    @Test
    void delete() {
        repository.deleteById(132);
    }

}
