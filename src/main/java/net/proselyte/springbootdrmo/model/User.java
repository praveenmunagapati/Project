package net.proselyte.springbootdrmo.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name ="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "login")
    private String login;
    @Column(name = "password")
    private String password;

    public String getUser_right() {
        return user_right;
    }

    public void setUser_right(String user_right) {
        this.user_right = user_right;
    }

    @Column(name = "user_right")
    private String user_right;


    @Column(name = "fio")
    private String fio;

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
