package com.busyteam.hackbackend.habits;

import com.busyteam.hackbackend.habits.repository.DbHabit;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class HabitsController {

  private final HabitsService habitsService;

  @GetMapping("/habits")
  public List<DbHabit> getAllHabits() {
    log.info("Listing all habits");
    return habitsService.listHabbits();
  }

  @PostMapping("/habits")
  public DbHabit createHabit(@RequestBody DbHabit habit) {
    log.info("Creating new habit: {}", habit);
    return habitsService.createHabit(habit);
  }
}
