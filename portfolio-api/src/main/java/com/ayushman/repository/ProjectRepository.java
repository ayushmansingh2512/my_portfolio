package com.ayushman.repository;

import com.ayushman.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository // Tells Spring: "This is the file that talks to the database"
public interface ProjectRepository extends JpaRepository<Project, Long> {
    
    // We don't even have to write the code for this method!
    // Spring Boot reads the method name and automatically writes a SQL query that says:
    // SELECT * FROM projects ORDER BY project_id DESC
    List<Project> findAllByOrderByProjectIdDesc();
    
}