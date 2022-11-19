package com.busyteam.hackbackend.items.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ItemRepository extends MongoRepository<DbItem, String> {

  List<DbItem> findAllByStatus(ItemStatus status);
}
