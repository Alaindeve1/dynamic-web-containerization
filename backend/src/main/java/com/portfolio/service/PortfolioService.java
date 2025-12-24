package com.portfolio.service;

import com.portfolio.model.Portfolio;
import com.portfolio.repository.PortfolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final PortfolioRepository repository;

    public List<Portfolio> getAllPortfolios() {
        return repository.findAll();
    }

    public Portfolio getPortfolioById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Portfolio not found"));
    }

    public Portfolio createPortfolio(Portfolio portfolio) {
        return repository.save(portfolio);
    }

    public Portfolio updatePortfolio(Long id, Portfolio portfolioDetails) {
        Portfolio portfolio = getPortfolioById(id);
        portfolio.setTitle(portfolioDetails.getTitle());
        portfolio.setDescription(portfolioDetails.getDescription());
        portfolio.setImageUrl(portfolioDetails.getImageUrl());
        portfolio.setProjectUrl(portfolioDetails.getProjectUrl());
        return repository.save(portfolio);
    }

    public void deletePortfolio(Long id) {
        Portfolio portfolio = getPortfolioById(id);
        repository.delete(portfolio);
    }
}
