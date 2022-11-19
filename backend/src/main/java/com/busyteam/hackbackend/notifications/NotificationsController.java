package com.busyteam.hackbackend.notifications;

import com.busyteam.hackbackend.items.ItemsService;
import com.busyteam.hackbackend.notifications.repository.DbNotification;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
