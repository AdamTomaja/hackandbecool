package com.busyteam.hackbackend.notifications;

import com.busyteam.hackbackend.notifications.repository.DbNotification;
import com.busyteam.hackbackend.notifications.repository.NotificationRepository;
import com.busyteam.hackbackend.notifications.repository.NotificationState;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationsService {
  private final NotificationRepository notificationRepository;

  public boolean isNotified(String itemId) {
    return notificationRepository.countAllByItemId(itemId) > 0;
  }

  public void deleteNotificationsForId(String itemId) {
    notificationRepository.findAllByItemId(itemId).stream()
        .map(n -> n.toBuilder().state(NotificationState.DELETED).build())
        .forEach(notificationRepository::save);
  }

  public void addNotification(String itemId, String message) {
    log.info("Adding new notification: {}", message);
    DbNotification notification = notificationRepository.save(createNotification(itemId, message));
    log.info("Creating new notification: {}", notification);
    notificationRepository.save(notification);
    log.info("Notification saved");
  }

  public List<DbNotification> listNotifications() {
    return notificationRepository.findAllByStateIn(
        Arrays.asList(NotificationState.NEW, NotificationState.READ));
  }

  private DbNotification createNotification(String itemId, String message) {
    return DbNotification.builder()
        .created(LocalDateTime.now())
        .state(NotificationState.NEW)
        .message(message)
        .itemId(itemId)
        .build();
  }
}
