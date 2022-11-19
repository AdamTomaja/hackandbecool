package com.busyteam.hackbackend.notifications;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class NotificationsController {

  private final NotificationsService notificationsService;
}
