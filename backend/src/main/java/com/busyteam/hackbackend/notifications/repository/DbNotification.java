package com.busyteam.hackbackend.notifications.repository;

import java.time.LocalDateTime;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Getter
@ToString
public class DbNotification {

  @Id private String id;

  private String message;

  private NotificationState state;

  private LocalDateTime created;

  private String itemId;
}
