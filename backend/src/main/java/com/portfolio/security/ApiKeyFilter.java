package com.portfolio.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class ApiKeyFilter extends OncePerRequestFilter {

    @Value("${application.security.api-key}")
    private String validApiKey;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain) throws ServletException, IOException {

        // Requirement: API key-based access for specific functionalities.
        // We enforce strict API Key validation for all DELETE operations.
        if ("DELETE".equalsIgnoreCase(request.getMethod())) {
            String apiKeyHeader = request.getHeader("X-API-KEY");
            if (apiKeyHeader == null || !apiKeyHeader.equals(validApiKey)) {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Missing or Invalid API Key for DELETE operation");
                return;
            }
        }

        // For other requests, we optionally check if the key is provided but invalid
        String apiKeyHeader = request.getHeader("X-API-KEY");
        if (apiKeyHeader != null && !apiKeyHeader.equals(validApiKey)) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Invalid API Key");
            return;
        }

        filterChain.doFilter(request, response);
    }
}
