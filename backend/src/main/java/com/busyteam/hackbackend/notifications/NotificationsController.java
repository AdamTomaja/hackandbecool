package com.busyteam.hackbackend.notifications;

import com.busyteam.hackbackend.items.ItemsService;
import com.busyteam.hackbackend.notifications.repository.DbNotification;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class NotificationsController {

  private final NotificationsService notificationsService;
  private final ItemsService itemsService;

  @GetMapping("/notifications")
  public List<Notification> listNotifications() {
    List<DbNotification> dbNotifications = notificationsService.listNotifications();
    return dbNotifications.stream().map(this::toNotification).toList();
  }

  private Notification toNotification(DbNotification dbNotification) {
    return Notification.builder()
        .notification(dbNotification)
        .item(itemsService.getItem(dbNotification.getItemId()))
        .build();
  }

  @PutMapping(value = "/notifications/{id}")
  public DbNotification updatenotificationById(
      @PathVariable("id") String id, @RequestBody DbNotification notification) {
    log.info("Update notification by id: {}, {}", id, notification);
    return notificationsService.updateNotificationById(id, notification);
  }
}
