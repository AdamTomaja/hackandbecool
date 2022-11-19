package com.busyteam.hackbackend.habits;

import com.busyteam.hackbackend.habits.repository.DbHabit;
import com.busyteam.hackbackend.habits.repository.HabitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HabitsService {

    private final HabitRepository habitRepository;

    public DbHabit createHabit(DbHabit habit) {
        return habitRepository.save(habit);
    }

    public List<DbHabit> listHabbits() {
        return habitRepository.findAll();
    }
}
