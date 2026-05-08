package com.ayushman.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ayushman.model.Project;
import com.ayushman.repository.ProjectRepository;

@CrossOrigin(origins = "*")
@RestController // Tells Spring: "This class handles web traffic and returns JSON data"
@RequestMapping("/api/projects") // Tells Spring: "Only listen to traffic going to localhost:8080/api/projects"

public class ProjectController {

    @Autowired // Tells Spring: "Hey, go find that ProjectRepository we made and inject it here so I can use it"
    private ProjectRepository projectRepository;

    @GetMapping // Tells Spring: "If someone makes a standard GET request to this URL, run this method"
    public List<Project> getAllProjects() {
        // We use the magic method you wrote in Step 3!
        return projectRepository.findAllByOrderByProjectIdDesc(); 
    }
}