package com.busyteam.hackbackend.notifications.repository;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@ToString
public class DbNotification {

    @Id
    private String id;

    private String message;

    private NotificationState state;

    private LocalDateTime created;

    private String itemId;
}
