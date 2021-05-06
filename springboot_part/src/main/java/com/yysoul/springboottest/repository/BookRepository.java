package com.yysoul.springboottest.repository;

import com.yysoul.springboottest.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Integer> {
//    <Boo, Integer> : <数据的类型, Id的类型>
}
