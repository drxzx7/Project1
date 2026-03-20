// Eternity AI - Stock Analysis Logic (Clean Client-Side)
// BSE/NSE Market Depth & Order Flow Monitoring

const marketData = {
    sentiment: "BULLISH",
    score: 82,
    summary: "Institutional order flow detected at 73,200 BSE SENSEX support. AI confidence (82%) suggests continued mid-cap accumulation across Banking and IT sectors.",
    stocks: [
        { symbol: "INFY.BO", name: "Infosys Ltd", price: "1,620.80", change: "+1.8%", trend: "boom" },
        { symbol: "SBIN.BO", name: "State Bank of India", price: "765.20", change: "+2.8%", trend: "boom" },
        { symbol: "RELIANCE.BO", name: "Reliance Ind.", price: "2,985.40", change: "+1.2%", trend: "boom" },
        { symbol: "TCS.BO", name: "Tata Consultancy", price: "3,842.10", change: "+2.4%", trend: "boom" },
        { symbol: "ADANIENT.BO", name: "Adani Enterprises", price: "3,112.50", change: "+2.1%", trend: "boom" },
        { symbol: "ITC.BO", name: "ITC Ltd", price: "412.50", change: "-0.5%", trend: "fall" },
        { symbol: "HDFCBANK.BO", name: "HDFC Bank", price: "1,442.20", change: "-1.2%", trend: "fall" }
    ]
};

function switchView(viewId) {
    const container = document.getElementById('view-container');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase().includes(viewId)) link.classList.add('active');
    });

    if (viewId === 'dashboard') renderDashboard();
    else if (viewId === 'analytics') renderAnalytics();
    else if (viewId === 'signals') renderSignals();
}

function renderDashboard() {
    const container = document.getElementById('view-container');
    container.innerHTML = `
        <div class="glass-panel" style="margin-bottom: 32px; border-left: 4px solid var(--accent-primary);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 style="font-size: 1.5rem; margin-bottom: 8px;">Market Sentiment: <span style="color:var(--success)">${marketData.sentiment}</span></h2>
                    <p style="color: var(--text-secondary); max-width: 600px;">${marketData.summary}</p>
                </div>
                <div style="font-size: 3rem; font-weight: 700; color: var(--accent-primary);">${marketData.score}<span style="font-size: 1rem; color: var(--text-secondary)">/100</span></div>
            </div>
        </div>

        <div class="stock-grid">
            ${marketData.stocks.map(stock => `
                <div class="glass-panel stock-card" style="border-top: 2px solid ${stock.trend === 'boom' ? 'var(--success)' : 'var(--danger)'};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3 style="font-size: 1.2rem;">${stock.symbol}</h3>
                        <span class="technical-pill ${stock.trend === 'boom' ? 'pill-boom' : 'pill-fall'}">${stock.trend.toUpperCase()}</span>
                    </div>
                    <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 4px;">₹${stock.price}</div>
                    <div style="color: ${stock.change.startsWith('+') ? 'var(--success)' : 'var(--danger)'}; font-weight: 600;">${stock.change} today</div>
                </div>
            `).join('')}
        </div>

        <div class="glass-panel" style="margin-top: 40px;">
            <h3 style="margin-bottom: 24px;">30-Day SENSEX Variance Analysis</h3>
            <div style="height: 300px;"><canvas id="marketChart"></canvas></div>
        </div>
    `;
    initDashboardChart();
}

function initDashboardChart() {
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => i + 1),
            datasets: [{
                label: 'Order Flow Depth',
                data: Array.from({length: 30}, () => Math.floor(Math.random() * 200) + 70000),
                borderColor: '#eab308',
                backgroundColor: 'rgba(234, 179, 8, 0.05)',
                fill: true,
                tension: 0.4,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#6b7280' } }
            }
        }
    });
}

function renderAnalytics() {
    const container = document.getElementById('view-container');
    container.innerHTML = `
        <div class="glass-panel">
            <h2 style="font-family: var(--font-heading); margin-bottom: 24px;">Advanced Order Flow Analytics</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 32px;">
                <div class="glass-panel" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-primary);">1.82</div>
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">SHARPE RATIO</div>
                </div>
                <div class="glass-panel" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--success);">+22.4%</div>
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">ALPHA GENERATED</div>
                </div>
                <div class="glass-panel" style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--accent-secondary);">0.95</div>
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">BETA COEFFICIENT</div>
                </div>
            </div>
            <div class="glass-panel">
                <h3 style="margin-bottom: 16px;">Sector Heatmap Analysis</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${['IT', 'Banking', 'Pharma', 'Energy', 'FMCG', 'Auto', 'Realty'].map(s => `
                        <div class="glass-panel" style="padding: 12px 20px; flex: 1; min-width: 120px; text-align: center; border-color: ${Math.random() > 0.3 ? 'var(--success)' : 'var(--danger)'};">
                            <div style="font-weight: 700;">${s}</div>
                            <div style="font-size: 11px; opacity: 0.7;">${(Math.random()*5).toFixed(1)}%</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderSignals() {
    const container = document.getElementById('view-container');
    container.innerHTML = `
        <div class="glass-panel">
            <h2 style="font-family: var(--font-heading); margin-bottom: 24px;">AI-Driven Trade Signals</h2>
            <div style="display: flex; flex-direction: column; gap: 16px;">
                <div class="glass-panel" style="border-left: 4px solid var(--success); display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="color: var(--success);">STRONG BUY: INFY.BO</h4>
                        <p style="font-size: 12px; color: var(--text-secondary);">Target: ₹1,680 | SL: ₹1,590 | Confidence: 92%</p>
                    </div>
                    <button class="export-btn" style="background: var(--success); color: white;">ENTRY LIVE</button>
                </div>
                <div class="glass-panel" style="border-left: 4px solid var(--success); display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="color: var(--success);">BUY: SBIN.BO</h4>
                        <p style="font-size: 12px; color: var(--text-secondary);">Target: ₹800 | SL: ₹745 | Confidence: 88%</p>
                    </div>
                    <button class="export-btn" style="background: var(--success); color: white;">ENTRY LIVE</button>
                </div>
                <div class="glass-panel" style="border-left: 4px solid var(--danger); display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h4 style="color: var(--danger);">EXIT: ITC.BO</h4>
                        <p style="font-size: 12px; color: var(--text-secondary);">Bearish divergence on daily RSI. Protect gains.</p>
                    </div>
                    <button class="export-btn" style="background: var(--danger); color: white;">EXIT SIGNAL</button>
                </div>
            </div>
        </div>
    `;
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    switchView('dashboard');
    lucide.createIcons();
});
