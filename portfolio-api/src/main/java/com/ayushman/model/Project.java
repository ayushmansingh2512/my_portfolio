package com.ayushman.model;

import java.util.List; 

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "projects")
public class Project {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id") 
    private Long projectId;

    @Column(name = "project_name")
    private String projectName;

    @Column(name = "project_img_link")
    private String projectImgLink;

    @Column(name = "project_description")
    private String projectDescription;

    @Column(name = "project_link_github")
    private String projectLinkGithub;

    @Column(name = "project_link_live")
    private String projectLinkLive;

    @JdbcTypeCode(SqlTypes.ARRAY) 
    @Column(name = "project_tech" , columnDefinition = "text[]") 
    private List<String> projectTech;

    // ==========================================
    // GETTERS AND SETTERS (The Keys to the JSON)
    // ==========================================

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectImgLink() {
        return projectImgLink;
    }

    public void setProjectImgLink(String projectImgLink) {
        this.projectImgLink = projectImgLink;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getProjectLinkGithub() {
        return projectLinkGithub;
    }

    public void setProjectLinkGithub(String projectLinkGithub) {
        this.projectLinkGithub = projectLinkGithub;
    }

    public String getProjectLinkLive() {
        return projectLinkLive;
    }

    public void setProjectLinkLive(String projectLinkLive) {
        this.projectLinkLive = projectLinkLive;
    }

    public List<String> getProjectTech() {
        return projectTech;
    }

    public void setProjectTech(List<String> projectTech) {
        this.projectTech = projectTech;
    }
}