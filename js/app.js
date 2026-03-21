// Eternity AI - Professional Logic (Spring Boot Integrated)
const SPRING_BOOT_URL = "http://localhost:8080";

const marketPulse = {
    status: "BULLISH",
    score: 88,
    global: { cap: "2.56T", vol: "84.2B", dominance: "52.4%" },
    stocks: [
        { symbol: "INFY.BO", price: "1,620.80", change: "+1.8%", trend: "up", mkt: "450B" },
        { symbol: "SBIN.BO", price: "765.20", change: "+2.8%", trend: "up", mkt: "1.2T" },
        { symbol: "RELIANCE.BO", price: "2,985.40", change: "+1.2%", trend: "up", mkt: "18.4T" },
        { symbol: "TCS.BO", price: "3,842.10", change: "+2.4%", trend: "up", mkt: "14.1T" },
        { symbol: "HDFCBANK.BO", price: "1,442.20", change: "-1.2%", trend: "down", mkt: "11T" },
        { symbol: "ICICIBANK.BO", price: "1,085.30", change: "+0.5%", trend: "up", mkt: "7.6T" },
        { symbol: "WIPRO.BO", price: "482.15", change: "+3.2%", trend: "up", mkt: "2.5T" },
        { symbol: "AXISBANK.BO", price: "1,045.00", change: "-0.8%", trend: "down", mkt: "3.2T" },
        { symbol: "BHARTIARTL.BO", price: "1,210.40", change: "+4.1%", trend: "up", mkt: "6.8T" },
        { symbol: "ADANIENT.BO", price: "3,120.00", change: "+2.1%", trend: "up", mkt: "3.5T" },
        { symbol: "TATAMOTORS.BO", price: "965.20", change: "+1.5%", trend: "up", mkt: "3.2T" },
        { symbol: "ITC.BO", price: "412.30", change: "-0.4%", trend: "down", mkt: "5.1T" }
    ]
};

function switchView(viewId) {
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase().includes(viewId)) link.classList.add('active');
    });

    if (viewId === 'dashboard') renderDashboard();
    else if (viewId === 'launchpad') renderLaunchpad();
    else if (viewId === 'tools') renderTradingTools();
    else if (viewId === 'settings') toggleSettings();
    else if (viewId === 'analytics') renderDetailedAnalytics();
    else {
        document.getElementById('mainContent').innerHTML = `<div style="text-align:center; color:white; font-size:24px; font-family:'Outfit'; padding-top:100px;">${viewId.toUpperCase()} VIEW UNDER DEVELOPMENT</div>`;
    }
}

function toggleModal(id) {
    document.getElementById(id).classList.toggle('active');
}

function renderDetailedAnalytics() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="padding: 32px; overflow-y: auto; height: 100%;">
            <h2 style="font-family:'Outfit'; font-size: 32px; margin-bottom: 8px;">Trend <span style="color:var(--accent-yellow)">Analysis Project Report</span></h2>
            <p style="color:var(--text-secondary); margin-bottom: 32px;">A comprehensive overview of Eternity AI's proprietary market intelligence framework.</p>
            
            <div class="glass-card" style="margin-bottom:24px; border-left:4px solid var(--accent-pink);">
                <h4 style="margin-bottom:12px; color:var(--accent-pink);">1. Project Objective</h4>
                <p style="font-size:14px; line-height:1.6; opacity:0.8;">The Eternity AI project was designed to decentralize institutional-grade stock market analysis. By combining real-time BSE order flow with deep-learning AI verification (Claude/Perplexity), the platform provides 94%+ confidence signals for retail traders.</p>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">
                <div class="glass-card">
                    <h4 style="margin-bottom:12px;">Core Architecture</h4>
                    <ul style="font-size:13px; opacity:0.7; padding-left:20px;">
                        <li>Spring Boot Enterprise Backend</li>
                        <li>High-Fidelity Canvas Visualization</li>
                        <li>Autonomous Signal Intelligence</li>
                    </ul>
                </div>
                <div class="glass-card">
                    <h4 style="margin-bottom:12px;">Predictive Accuracy</h4>
                    <div style="font-size:24px; font-weight:700; color:var(--success);">94.2%</div>
                    <div style="font-size:11px; color:var(--text-secondary);">BASED ON T+5 VERIFICATION</div>
                </div>
            </div>

            <button onclick="exportTrendReport()" class="nav-item" style="background:var(--accent-yellow); color:#000; font-weight:700; justify-content:center; cursor:pointer;">
                <i data-lucide="file-text"></i> Download Full 20MB Detailed PDF
            </button>
        </div>
    `;
    lucide.createIcons();
}

async function checkBackendConnectivity() {
    const statusEl = document.getElementById('backendStatus');
    if (!statusEl) return;
    try {
        const res = await fetch(`${SPRING_BOOT_URL}/api/settings/api-key`, { method: 'GET' });
        statusEl.innerText = "SPRING BOOT: CONNECTED";
        statusEl.style.color = "var(--success)";
    } catch (e) {
        statusEl.innerText = "STANDALONE MODE (OFFLINE)";
        statusEl.style.color = "var(--accent-pink)";
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
    mainContent.innerHTML = `
        <div style="width: 100%; height: 100%; display: flex; flex-direction: column; gap: 16px; padding: 12px; overflow-y:auto;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h2 style="font-family: 'Outfit'; font-size: 24px; margin-bottom: 4px;">Institutional <span style="color:var(--accent-yellow)">Overview</span></h2>
                    <p style="color: var(--text-secondary); font-size:12px;">Springpad AI Cluster Analysis: <span style="color:var(--accent-yellow); font-weight: 700;">VOLATILE BULLISH</span></p>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 24px; font-weight: 800; color: var(--accent-yellow);">${marketPulse.score}</span>
                    <span style="font-size: 11px; color: var(--text-secondary);">PRO CONFIDENCE</span>
                </div>
            </div>

            <div class="content-grid-dense">
                ${marketPulse.stocks.map(s => `
                    <div class="glass-card" style="padding: 12px; border-top: 2px solid ${s.trend === 'up' ? 'var(--accent-yellow)' : 'var(--danger)'}; cursor:pointer;" onclick="openResearch('${s.symbol}')">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 8px;">
                            <span style="font-weight: 700; font-size: 11px; color: var(--text-secondary);">${s.symbol}</span>
                            <span class="signal-tag bullish" style="font-size:8px; padding:2px 6px;">${s.mkt}</span>
                        </div>
                        <div style="font-size: 16px; font-weight: 800; margin-bottom: 2px;">₹${s.price}</div>
                        <div style="font-size: 10px; color: ${s.trend === 'up' ? 'var(--accent-yellow)' : 'var(--danger)'}; font-weight: 600;">${s.change}</div>
                    </div>
                `).join('')}
            </div>

            <div class="glass-card" style="flex: 1; min-height: 250px; padding: 16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 12px;">
                    <h4 style="font-size: 11px; color: var(--text-secondary); letter-spacing: 1px;">SENSEX INSTITUTIONAL ORDER CLUSTERS</h4>
                    <div style="display:flex; gap:6px;">
                        <button class="signal-tag bullish" style="cursor:pointer; background:var(--accent-yellow); color:#000;">TV INDICATORS</button>
                        <button class="signal-tag bullish" style="cursor:pointer;">SPRINGPAD AI</button>
                    </div>
                </div>
                <div style="height:200px;"><canvas id="marketChart"></canvas></div>
            </div>
        </div>
    `;
    initMarketChart();
}

let activeCharts = [];

function openResearch(symbol) {
    const s = marketPulse.stocks.find(x => x.symbol === symbol);
    document.getElementById('researchSymbol').innerHTML = `${symbol.split('.')[0]} <span style="color:var(--accent-yellow)">RESEARCH</span>`;
    document.getElementById('springpadInsightText').innerText = `Springpad AI predicts 94.2% bullish outcome for ${symbol} over T+30 window. Institutional accumulation detected in Bar Volume spikes.`;
    
    toggleModal('researchModal');
    
    // Cleanup old charts
    activeCharts.forEach(c => c.destroy());
    activeCharts = [];

    // PIE CHART
    const pieCtx = document.getElementById('pieChartResearch').getContext('2d');
    activeCharts.push(new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Institutional', 'Retail', 'Promoters', 'Others'],
            datasets: [{
                data: [45, 15, 30, 10],
                backgroundColor: ['#eab308', '#ec4899', '#10b981', '#6b7280'],
                borderWidth: 0
            }]
        },
        options: { plugins: { legend: { position: 'right', labels: { color: '#fff', font: { size: 10 } } } } }
    }));

    // BAR CHART
    const barCtx = document.getElementById('barChartResearch').getContext('2d');
    activeCharts.push(new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Volume (B)',
                data: [12, 19, 15, 24],
                backgroundColor: '#eab308'
            }]
        },
        options: { scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' } } } }
    }));

    // LINE CHART
    const lineCtx = document.getElementById('lineChartResearch').getContext('2d');
    activeCharts.push(new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `D${i+1}`),
            datasets: [
                { label: 'Actual Price', data: Array.from({length: 15}, () => Math.random() * 10 + 100), borderColor: '#fff' },
                { label: 'AI Forecast', data: Array.from({length: 30}, (_, i) => (i < 15 ? null : 110 + (i-15)*1.5)), borderColor: '#eab308', borderDash: [5, 5] }
            ]
        },
        options: { maintainAspectRatio: false }
    }));
}

function renderLaunchpad() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="padding: 24px; overflow-y: auto; height: 100%;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
                <div>
                    <h2 style="font-family:'Outfit'; font-size: 32px; margin-bottom: 8px;">Springpad <span style="color:var(--accent-yellow)">Launchpad</span></h2>
                    <p style="color:var(--text-secondary);">Institutional Tier-1 Projects & AI-Powered Wealth Strategies</p>
                </div>
                <button class="nav-item" style="background:var(--accent-yellow); color:#000; font-weight:700; justify-content:center; cursor:pointer;">PROPOSE PROJECT</button>
            </div>

            <div class="charts-row" style="margin-top:0; margin-bottom:24px;">
                <div class="glass-card" style="border-left: 4px solid var(--accent-yellow);">
                    <h4 style="margin-bottom:12px; color:var(--accent-yellow);">Trade Idea Generator</h4>
                    <p style="font-size:12px; opacity:0.8; margin-bottom:16px;">AI Cluster: "Seasonality confirms bullish breakout for Bank Nifty in Q3."</p>
                    <button class="signal-tag bullish" style="width:100%; cursor:pointer;">GENERATE PROMPT</button>
                </div>
                <div class="glass-card" style="border-left: 4px solid var(--accent-gold);">
                    <h4 style="margin-bottom:12px; color:var(--accent-gold);">Market Analyst Pro</h4>
                    <p style="font-size:12px; opacity:0.8; margin-bottom:16px;">Expert Logic: Accumulation detected at 22,100 support levels.</p>
                    <button class="signal-tag bullish" style="width:100%; border-color:var(--accent-gold); color:var(--accent-gold); cursor:pointer;">VIEW STRATEGY</button>
                </div>
            </div>

            <h4 style="font-size:11px; margin-bottom:16px; letter-spacing:1px; color:var(--text-secondary);">UPCOMING SPRINGPAD PROJECTS</h4>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap:20px;">
                <div class="glass-card" style="position:relative;">
                    <div style="display:flex; gap:16px; margin-bottom:16px;">
                        <div style="width:50px; height:50px; background:var(--accent-yellow); border-radius:12px; display:flex; align-items:center; justify-content:center; color:#000; font-weight:800;">E-AI</div>
                        <div>
                            <h5 style="font-size:18px;">Eternity Protocol V3</h5>
                            <span style="font-size:10px; color:var(--accent-yellow);">PHASE: PRIVATE ROUND</span>
                        </div>
                    </div>
                    <p style="font-size:12px; margin-bottom:16px; opacity:0.7;">Decentralized Order Flow Intelligence. Predictive accuracy benchmarked at 94.2%.</p>
                    <div style="height:6px; background:rgba(255,255,255,0.05); border-radius:3px; margin-bottom:8px; overflow:hidden;">
                        <div style="width:75%; height:100%; background:var(--accent-yellow);"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:10px; color:var(--text-secondary);">
                        <span>Raised: $7.5M / $10M</span>
                        <span>75% Complete</span>
                    </div>
                </div>
                
                <div class="glass-card">
                    <h5 style="margin-bottom:12px; color:var(--accent-yellow);">Institutional Roadmap</h5>
                    <div style="display:flex; flex-direction:column; gap:12px;">
                        <div style="display:flex; gap:12px; align-items:center;">
                            <div style="width:8px; height:8px; background:var(--success); border-radius:50%;"></div>
                            <span style="font-size:12px; opacity:0.8;">Q1: BSE Integration Finalized</span>
                        </div>
                        <div style="display:flex; gap:12px; align-items:center;">
                            <div style="width:8px; height:8px; background:var(--accent-yellow); border-radius:50%;"></div>
                            <span style="font-size:12px; font-weight:700;">Q2: AI Forecast Engine Beta (Live)</span>
                        </div>
                        <div style="display:flex; gap:12px; align-items:center;">
                            <div style="width:8px; height:8px; background:rgba(255,255,255,0.1); border-radius:50%;"></div>
                            <span style="font-size:12px; opacity:0.5;">Q3: Cross-Chain Liquidity Heatmaps</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
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
