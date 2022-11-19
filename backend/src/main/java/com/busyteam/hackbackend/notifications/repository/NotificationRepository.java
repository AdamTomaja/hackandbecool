package com.busyteam.hackbackend.notifications.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationRepository extends MongoRepository<DbNotification, String> {
  int countAllByItemId(String itemId);

  List<DbNotification> findAllByItemId(String itemId);

  List<DbNotification> findAllByStateIn(List<NotificationState> states);
}
