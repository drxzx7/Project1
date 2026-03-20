// Eternity AI - Refined 3-Column Logic
// BSE/NSE Market Depth & Autonomous Intelligence

const marketPulse = {
    status: "BULLISH",
    score: 82,
    stocks: [
        { symbol: "INFY.BO", price: "1,620.80", change: "+1.8%", trend: "up" },
        { symbol: "SBIN.BO", price: "765.20", change: "+2.8%", trend: "up" },
        { symbol: "RELIANCE.BO", price: "2,985.40", change: "+1.2%", trend: "up" },
        { symbol: "TCS.BO", price: "3,842.10", change: "+2.4%", trend: "up" }
    ]
};

function switchView(viewId) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase().includes(viewId)) link.classList.add('active');
    });

    if (viewId === 'dashboard') {
        renderDashboard();
    } else {
        document.getElementById('mainContent').innerHTML = `<div style="text-align:center; color:white; font-size:24px; font-family:'Outfit';">${viewId.toUpperCase()} VIEW UNDER DEVELOPMENT</div>`;
    }
}

function renderDashboard() {
    const mainContent = document.getElementById('mainContent');
    
    // Show loading state first as per screenshot
    mainContent.innerHTML = `
        <div id="loadingState" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
            <div class="loading-spinner"></div>
            <div class="loading-text">Initializing AI Models...</div>
        </div>
    `;

    // Simulate model initialization transition
    setTimeout(() => {
        mainContent.innerHTML = `
            <div style="width: 100%; height: 100%; display: flex; flex-direction: column; gap: 24px; padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
                    <div>
                        <h2 style="font-family: 'Outfit'; font-size: 28px; margin-bottom: 8px;">Institutional <span style="color:var(--accent-yellow)">Overview</span></h2>
                        <p style="color: var(--text-secondary);">Market Sentiment: <span style="color:#10b981; font-weight: 700;">${marketPulse.status}</span></p>
                    </div>
                    <div style="text-align: right;">
                        <span style="font-size: 32px; font-weight: 800; color: var(--accent-pink);">${marketPulse.score}</span>
                        <span style="font-size: 14px; color: var(--text-secondary);">AI CONFIDENCE</span>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
                    ${marketPulse.stocks.map(s => `
                        <div class="glass-card" style="padding: 20px; border-top: 2px solid ${s.trend === 'up' ? '#10b981' : '#ef4444'};">
                            <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text-secondary);">${s.symbol}</div>
                            <div style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">₹${s.price}</div>
                            <div style="font-size: 12px; color: #10b981; font-weight: 600;">${s.change}</div>
                        </div>
                    `).join('')}
                </div>

                <div style="flex: 1; min-height: 200px; padding-top: 20px;">
                    <h4 style="margin-bottom: 16px; font-size: 14px; color: var(--text-secondary); letter-spacing: 1px;">BSE SENSEX ORDER FLOW DEPTH</h4>
                    <canvas id="marketChart" style="background: rgba(0,0,0,0.2); border-radius: 12px;"></canvas>
                </div>
            </div>
        </div>
        `;
        initMarketChart();
    }, 1500);
}

function initMarketChart() {
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 20}, (_, i) => i + 1),
            datasets: [{
                label: 'Order Depth',
                data: Array.from({length: 20}, () => Math.floor(Math.random() * 200) + 72000),
                borderColor: '#ec4899',
                backgroundColor: 'rgba(236, 72, 153, 0.05)',
                fill: true,
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#6b7280' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } }
            }
        }
    });
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    switchView('dashboard');
    lucide.createIcons();
});
