package com.busyteam.hackbackend.notifications.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<DbNotification, String> {
    int countAllByItemId(String itemId);
    List<DbNotification> findAllByItemId(String itemId);
}
