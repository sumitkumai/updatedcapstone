package com.edutech.dto;

import java.time.Instant;

public class ApiResponse<T> {

    private Instant timestamp;
    private int status;
    private String message;
    private T data;

    public ApiResponse() {
        this.timestamp = Instant.now();
    }

    public static <T> ApiResponse<T> ok(T data) {
        return ok("Success", data);
    }

    public static <T> ApiResponse<T> ok(String message, T data) {
        ApiResponse<T> r = new ApiResponse<>();
        r.setStatus(200);
        r.setMessage(message);
        r.setData(data);
        return r;
    }

    public static <T> ApiResponse<T> created(String message, T data) {
        ApiResponse<T> r = new ApiResponse<>();
        r.setStatus(201);
        r.setMessage(message);
        r.setData(data);
        return r;
    }

    public static <T> ApiResponse<T> error(int status, String message) {
        ApiResponse<T> r = new ApiResponse<>();
        r.setStatus(status);
        r.setMessage(message);
        r.setData(null);
        return r;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
