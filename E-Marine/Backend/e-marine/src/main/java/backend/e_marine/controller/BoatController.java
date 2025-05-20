package backend.e_marine.controller;

import backend.e_marine.dto.BoatWithLocationDto;
import backend.e_marine.service.BoatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boats")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // or your frontend URL
public class BoatController {

    private final BoatService boatService;

    // ✅ Create a new boat
    @PostMapping
    public ResponseEntity<BoatWithLocationDto> createBoat(@RequestBody BoatWithLocationDto dto) {
        BoatWithLocationDto created = boatService.createBoat(dto);
        return ResponseEntity.ok(created);
    }

    // ✅ Get all boats with their latest locations
    @GetMapping
    public ResponseEntity<List<BoatWithLocationDto>> getAllBoats() {
        return ResponseEntity.ok(boatService.getAllBoats());
    }

    // ✅ Update boat info and add new location
    @PutMapping("/{boatId}")
    public ResponseEntity<BoatWithLocationDto> updateBoat(
            @PathVariable Long boatId,
            @RequestBody BoatWithLocationDto dto
    ) {
        BoatWithLocationDto updated = boatService.updateBoat(boatId, dto);
        return ResponseEntity.ok(updated);
    }

    // ✅ Delete a boat
    @DeleteMapping("/{boatId}")
    public ResponseEntity<Void> deleteBoat(@PathVariable Long boatId) {
        boatService.deleteBoat(boatId);
        return ResponseEntity.noContent().build();
    }
}