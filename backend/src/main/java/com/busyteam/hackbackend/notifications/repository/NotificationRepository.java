package com.busyteam.hackbackend.notifications.repository;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationRepository extends MongoRepository<DbNotification, String> {
  int countAllByItemIdAndStateIsNot(String itemId, NotificationState state);

  List<DbNotification> findAllByItemId(String itemId);

  List<DbNotification> findAllByStateIn(List<NotificationState> states);
}
