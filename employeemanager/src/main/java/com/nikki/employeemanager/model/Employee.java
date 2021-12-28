package com.nikki.employeemanager.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Data
@Table(name="employees")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false , updatable = true)
    private Long id;
    @Column(name="first_name")
    private String firstName;
    @Column(name="last_name")
    private String lastName;
    @Column(name="job_title")
    private String jobTitle;
    @Column(name="phone_no")
    private String phoneNo;
    @Column(name="employee_code")
    private String employeeCode;
    @Column(name="image_url")
    private String imageUrl;
    @Column(name="email_address")
    private String emailAddress;
}
