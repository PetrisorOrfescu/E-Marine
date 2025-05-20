package backend.e_marine.service;

import backend.e_marine.dto.BoatWithLocationDto;
import backend.e_marine.entity.Boat;
import backend.e_marine.entity.BoatLocation;
import backend.e_marine.repository.BoatRepository;
import backend.e_marine.repository.BoatLocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoatService {

    private final BoatRepository boatRepository;
    private final BoatLocationRepository boatLocationRepository;

    // Create a boat with initial location
    public BoatWithLocationDto createBoat(BoatWithLocationDto dto) {
        Boat boat = new Boat();
        boat.setName(dto.getName());
        boat.setType(dto.getType());
        boat.setStatus(dto.getStatus());

        Boat savedBoat = boatRepository.save(boat);

        BoatLocation location = new BoatLocation();
        location.setBoat(savedBoat);
        location.setLatitude(dto.getLatitude());
        location.setLongitude(dto.getLongitude());
        location.setTimestamp(dto.getTimestamp() != null ? dto.getTimestamp() : LocalDateTime.now());

        boatLocationRepository.save(location);

        return dto;
    }

    // Get all boats with latest location
    public List<BoatWithLocationDto> getAllBoats() {
        return boatRepository.findAll().stream().map(boat -> {
            Optional<BoatLocation> latestLoc = boat.getLocations().stream()
                    .max((l1, l2) -> l1.getTimestamp().compareTo(l2.getTimestamp()));

            BoatWithLocationDto dto = new BoatWithLocationDto();
            dto.setName(boat.getName());
            dto.setType(boat.getType());
            dto.setStatus(boat.getStatus());

            latestLoc.ifPresent(loc -> {
                dto.setLatitude(loc.getLatitude());
                dto.setLongitude(loc.getLongitude());
                dto.setTimestamp(loc.getTimestamp());
            });

            return dto;
        }).collect(Collectors.toList());
    }

    // Update boat status and location
    public BoatWithLocationDto updateBoat(Long boatId, BoatWithLocationDto dto) {
        Boat boat = boatRepository.findById(boatId).orElseThrow();

        boat.setStatus(dto.getStatus());
        boatRepository.save(boat);

        BoatLocation location = new BoatLocation();
        location.setBoat(boat);
        location.setLatitude(dto.getLatitude());
        location.setLongitude(dto.getLongitude());
        location.setTimestamp(dto.getTimestamp() != null ? dto.getTimestamp() : LocalDateTime.now());

        boatLocationRepository.save(location);

        return dto;
    }

    // Delete boat
    public void deleteBoat(Long boatId) {
        boatRepository.deleteById(boatId);
    }
}
