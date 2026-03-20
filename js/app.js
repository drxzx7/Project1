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

    if (viewId === 'dashboard') renderDashboard();
    else if (viewId === 'tools') renderTradingTools();
    else {
        document.getElementById('mainContent').innerHTML = `<div style="text-align:center; color:white; font-size:24px; font-family:'Outfit'; padding-top:100px;">${viewId.toUpperCase()} VIEW UNDER DEVELOPMENT</div>`;
    }
}

function switchChatTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.chat-tab-content').forEach(content => content.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabId + 'Tab').classList.add('active');
    
    if (tabId === 'feed') renderOfficialFeed();
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
                        <div class="glass-card" style="padding: 20px; border-top: 2px solid ${s.trend === 'up' ? '#10b981' : '#ef4444'}; position:relative; overflow:hidden;">
                            <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px; color: var(--text-secondary);">${s.symbol}</div>
                            <div style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">₹${s.price}</div>
                            <div style="font-size: 12px; color: #10b981; font-weight: 600; margin-bottom:12px;">${s.change}</div>
                            
                            <!-- OLYMP TRADE STYLE QUICK BUTTONS -->
                            <div style="display:flex; gap:8px;">
                                <button class="signal-tag bullish" style="flex:1; cursor:pointer;" onclick="showToast('HIGHER order placed', 'success')">HIGHER</button>
                                <button class="signal-tag bearish" style="flex:1; cursor:pointer;" onclick="showToast('LOWER order placed', 'success')">LOWER</button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="flex: 1; min-height: 200px; padding-top: 20px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
                        <h4 style="font-size: 14px; color: var(--text-secondary); letter-spacing: 1px;">BSE SENSEX ORDER FLOW DEPTH</h4>
                        <!-- TRADINGVIEW STYLE CONTROLS -->
                        <div style="display:flex; gap:8px;">
                            <button class="signal-tag" style="background:rgba(255,255,255,0.05); cursor:pointer;">15M</button>
                            <button class="signal-tag active" style="background:var(--accent-pink); color:#fff; cursor:pointer;">1H</button>
                            <button class="signal-tag" style="background:rgba(255,255,255,0.05); cursor:pointer;">4H</button>
                            <button class="signal-tag" style="background:rgba(234, 179, 8, 0.1); color:var(--accent-yellow); cursor:pointer;"><i data-lucide="plus" style="width:12px; height:12px;"></i> Indicators</button>
                        </div>
                    </div>
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

function renderTradingTools() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="padding: 32px; overflow-y: auto; height: 100%;">
            <h2 style="font-family:'Outfit'; font-size: 32px; margin-bottom: 8px;">Technical <span style="color:var(--accent-yellow)">Analysis Toolkit</span></h2>
            <p style="color:var(--text-secondary); margin-bottom: 40px; max-width: 600px;">Deep-analysis indicators utilized by institutional order-flow experts and AI verify models (Claude/Perplexity).</p>
            
            <div class="tools-grid">
                <div class="glass-card tool-card">
                    <div style="display:flex; justify-content:space-between;">
                        <h4>Relative Strength Index (RSI)</h4>
                        <i data-lucide="info" style="width:16px;"></i>
                    </div>
                    <p>Measures the speed and change of price movements. Used to identify overbought (>70) or oversold (<30) conditions. Expert Tip: Watch for bullish divergence on the 4H timeframe.</p>
                    <span class="expert-badge">OFFICIAL CHOICE</span>
                </div>

                <div class="glass-card tool-card">
                    <h4>Volume Profile (VPVR)</h4>
                    <p>Displays trading activity over a specified time period at specific price levels. Traders use this to find "Points of Control" (POC) where institutions are heavily accumulating.</p>
                    <span class="expert-badge">INSTITUTIONAL GRADE</span>
                </div>

                <div class="glass-card tool-card">
                    <h4>MACD Convergence</h4>
                    <p>Trend-following momentum indicator. Higher officials use the 12, 26, 9 EMA crossover to confirm entry signals suggested by AI verification clusters.</p>
                    <span class="expert-badge">GOOGLE EXPERT SUGGESTION</span>
                </div>

                <div class="glass-card tool-card">
                    <h4>Bollinger Bands</h4>
                    <p>Measures market volatility. When bands "squeeze," it indicates a massive trend breakout is imminent. Higher officials use this during consolidation phases.</p>
                    <span class="expert-badge">BREAKOUT TOOL</span>
                </div>

                <div class="glass-card tool-card">
                    <h4>Multi-Timeframe Analysis</h4>
                    <p>Verifying signals across 5m, 15m, 1H, and 4H charts. Claude AI verification suggests this is the #1 way to filter out false breakouts.</p>
                    <span class="expert-badge">ANALYSIS CLUSTER</span>
                </div>

                <div class="glass-card tool-card">
                    <div style="color:var(--accent-pink); font-weight:700; margin-bottom:12px;">AUTOMATE STRATEGY</div>
                    <p>Seamlessly connect this toolkit to **Make.com** or **n8n** for autonomous order flow execution based on signal triggers.</p>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function renderOfficialFeed() {
    const feed = document.getElementById('officialFeed');
    const posts = [
        { name: "BSE Officials", avatar: "B", time: "12m ago", body: "Market sentiment remains cautiously optimistic as mid-cap volatility stabilizes. Bullish trends noted in Banking." },
        { name: "Global Analyst", avatar: "A", time: "45m ago", body: "RSI on SENSEX indicates temporary overbought. Expect a minor retracement before the next leg up." },
        { name: "Institutional Desk", avatar: "I", time: "1h ago", body: "Institutional accumulation detected at 73,150 support. Bears are losing grip on the tech sector." },
        { name: "Expert Verified", avatar: "E", time: "3h ago", body: "Perplexity AI verify confirms bullish divergence on multiple Tier-1 indices. High conviction targets identified." }
    ];

    feed.innerHTML = posts.map(p => `
        <div class="feed-item">
            <div class="feed-header">
                <div class="feed-avatar">${p.avatar}</div>
                <div>
                    <div class="feed-name">${p.name}</div>
                    <div class="feed-time">${p.time}</div>
                </div>
            </div>
            <div class="feed-body">${p.body}</div>
            <div style="display:flex; gap:12px;">
                <span class="signal-tag bullish">VERIFIED BULLISH</span>
            </div>
        </div>
    `).join('');
}
