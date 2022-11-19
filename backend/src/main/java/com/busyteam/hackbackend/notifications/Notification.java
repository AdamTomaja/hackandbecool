package com.busyteam.hackbackend.notifications;

import com.busyteam.hackbackend.items.repository.DbItem;
import com.busyteam.hackbackend.notifications.repository.DbNotification;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Notification {
  private DbNotification notification;
  private DbItem item;
}
