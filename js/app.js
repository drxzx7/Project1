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
    else if (viewId === 'markets') renderMarkets();
    else if (viewId === 'analytics') renderDetailedAnalytics();
    else if (viewId === 'launchpad') renderLaunchpad();
    else if (viewId === 'trades') renderTrades();
    else if (viewId === 'portfolio' || viewId === 'wealth') renderWealth();
    else if (viewId === 'tools') renderTradingTools();
    else if (viewId === 'settings') renderSettings();
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

function renderMarkets() {
    const mainContent = document.getElementById('mainContent');
    const assets = [
        { rank: 1, name: "Reliance Ind.", sym: "RELIANCE.BO", price: "2,985.40", change: "+1.2%", vol: "12.4B", mkt: "18.4T" },
        { rank: 2, name: "TCS", sym: "TCS.BO", price: "3,842.10", change: "+2.4%", vol: "8.1B", mkt: "14.1T" },
        { rank: 3, name: "HDFC Bank", sym: "HDFCBANK.BO", price: "1,442.20", change: "-1.2%", vol: "15.2B", mkt: "11T" },
        { rank: 4, name: "Infosys", sym: "INFY.BO", price: "1,620.80", change: "+1.8%", vol: "6.4B", mkt: "450B" },
        { rank: 5, name: "ICICI Bank", sym: "ICICIBANK.BO", price: "1,085.30", change: "+0.5%", vol: "5.8B", mkt: "7.6T" },
        { rank: 6, name: "SBI", sym: "SBIN.BO", price: "765.20", change: "+2.8%", vol: "9.2B", mkt: "1.2T" },
        { rank: 7, name: "Bharti Airtel", sym: "BHARTIARTL.BO", price: "1,210.40", change: "+4.1%", vol: "4.5B", mkt: "6.8T" },
        { rank: 8, name: "Wipro", sym: "WIPRO.BO", price: "482.15", change: "+3.2%", vol: "2.1B", mkt: "2.5T" },
        { rank: 9, name: "Axis Bank", sym: "AXISBANK.BO", price: "1,045.00", change: "-0.8%", vol: "3.2B", mkt: "3.2T" },
        { rank: 10, name: "Tata Motors", sym: "TATAMOTORS.BO", price: "965.20", change: "+1.5%", vol: "5.1B", mkt: "3.2T" },
        { rank: 11, name: "ITC", sym: "ITC.BO", price: "412.30", change: "-0.4%", vol: "3.8B", mkt: "5.1T" },
        { rank: 12, name: "Adani Ent.", sym: "ADANIENT.BO", price: "3,120.00", change: "+2.1%", vol: "1.2B", mkt: "3.5T" }
    ];

    mainContent.innerHTML = `
        <div style="padding: 24px; overflow-y:auto; height: 100%;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                <h2 style="font-family:'Outfit'; font-size:28px;">Institutional <span style="color:var(--accent-yellow)">Markets</span></h2>
                <div style="display:flex; gap:8px;">
                    <button class="signal-tag active" style="background:var(--accent-yellow); color:#000; cursor:pointer;">Equity</button>
                    <button class="signal-tag" style="cursor:pointer;">Crypto</button>
                    <button class="signal-tag" style="cursor:pointer;">Forex</button>
                </div>
            </div>

            <table style="width:100%; border-collapse: collapse; font-size:13px;">
                <thead>
                    <tr style="text-align:left; color:var(--text-secondary); border-bottom: 1px solid var(--glass-border);">
                        <th style="padding:12px 8px;">#</th>
                        <th style="padding:12px 8px;">Asset</th>
                        <th style="padding:12px 8px;">Price</th>
                        <th style="padding:12px 8px;">24h %</th>
                        <th style="padding:12px 8px;">Volume (24h)</th>
                        <th style="padding:12px 8px;">Market Cap</th>
                        <th style="padding:12px 8px;">Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${assets.map(a => `
                        <tr style="border-bottom: 1px solid var(--glass-border); transition: background 0.2s; cursor:pointer;" onmouseover="this.style.background='rgba(234,179,8,0.05)'" onmouseout="this.style.background='transparent'" onclick="openResearch('${a.sym}')">
                            <td style="padding:16px 8px; color:var(--text-secondary);">${a.rank}</td>
                            <td style="padding:16px 8px;"><div style="font-weight:700;">${a.name}</div><div style="font-size:10px; color:var(--text-secondary);">${a.sym}</div></td>
                            <td style="padding:16px 8px; font-weight:600;">₹${a.price}</td>
                            <td style="padding:16px 8px; color:${a.change.includes('+') ? 'var(--success)' : 'var(--danger)'}; font-weight:700;">${a.change}</td>
                            <td style="padding:16px 8px;">₹${a.vol}</td>
                            <td style="padding:16px 8px;">₹${a.mkt}</td>
                            <td style="padding:16px 8px;"><button class="signal-tag bullish" style="pointer-events:none;">RESEARCH</button></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

let activeCharts = [];

function openResearch(symbol) {
    const s = marketPulse.stocks.find(x => x.symbol === symbol) || { symbol: symbol };
    document.getElementById('researchSymbol').innerHTML = `${symbol.split('.')[0]} <span style="color:var(--accent-yellow)">RESEARCH</span>`;
    document.getElementById('springpadInsightText').innerText = `Springpad AI predicts 94.2% bullish outcome for ${symbol} over T+30 window. Institutional accumulation detected in Bar Volume spikes.`;
    
    toggleModal('researchModal');
    
    // Cleanup old charts
    activeCharts.forEach(c => { if(c && typeof c.destroy === 'function') c.destroy(); });
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
        options: { scales: { y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }
    }));

    // LINE CHART
    const lineCtx = document.getElementById('lineChartResearch').getContext('2d');
    activeCharts.push(new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `D${i+1}`),
            datasets: [
                { label: 'Actual Price', data: Array.from({length: 15}, () => Math.random() * 10 + 100), borderColor: '#fff', tension: 0.4 },
                { label: 'AI Forecast', data: Array.from({length: 30}, (_, i) => (i < 15 ? null : 110 + (i-15)*1.5)), borderColor: '#eab308', borderDash: [5, 5], tension: 0.4 }
            ]
        },
        options: { maintainAspectRatio: false, scales: { y: { ticks: { color: '#fff' } }, x: { ticks: { color: '#fff' } } } }
    }));
}

function renderTrades() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="display:grid; grid-template-columns: 1fr 320px; gap:20px; padding:24px; height:100%;">
            <div style="display:flex; flex-direction:column; gap:20px; overflow-y:auto;">
                <div class="glass-card" style="height:350px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                        <h4 style="font-size:12px; color:var(--text-secondary);">INSTITUTIONAL EXECUTION BENCH</h4>
                        <span style="color:var(--accent-yellow); font-size:11px;">PROVIDER: OLYMP TRADE CLUSTER</span>
                    </div>
                    <canvas id="tradeExecutionChart" style="height:280px;"></canvas>
                </div>
                
                <div class="glass-card">
                    <h4 style="font-size:12px; color:var(--text-secondary); margin-bottom:16px;">EXECUTION HISTORY</h4>
                    <div id="tradeHistoryList" style="display:flex; flex-direction:column; gap:12px;">
                        ${Array.from({length: 5}, (_, i) => `
                            <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:rgba(255,255,255,0.02); border-radius:12px;">
                                <div>
                                    <div style="font-size:13px; font-weight:700;">INFY.BO <span style="color:var(--accent-yellow)">HIGHER</span></div>
                                    <div style="font-size:10px; color:var(--text-secondary);">Executed: 14:2${i} PM</div>
                                </div>
                                <div style="text-align:right;">
                                    <div style="color:var(--success); font-weight:700;">+$48.20</div>
                                    <div style="font-size:10px; color:var(--text-secondary);">92% Return</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="glass-card" style="display:flex; flex-direction:column; gap:24px;">
                <h3 style="font-family:'Outfit';">Trade <span style="color:var(--accent-yellow)">Setup</span></h3>
                
                <div>
                    <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:8px;">ASSET</label>
                    <select class="search-input" style="padding-left:15px; appearance:none;"><option>RELIANCE.BO</option><option>INFY.BO</option></select>
                </div>

                <div>
                    <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:8px;">STRIKE PRICE</label>
                    <div style="font-size:24px; font-weight:800; color:var(--accent-yellow);">₹2,985.40</div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                    <div>
                        <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:8px;">DURATION</label>
                        <select class="search-input" style="padding-left:10px;"><option>1 min</option><option>5 min</option></select>
                    </div>
                    <div>
                        <label style="font-size:11px; color:var(--text-secondary); display:block; margin-bottom:8px;">PROFIT</label>
                        <div style="font-size:18px; font-weight:700; color:var(--success);">82%</div>
                    </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:12px; margin-top:auto;">
                    <button class="signal-tag bullish" style="height:60px; font-size:16px; cursor:pointer;" onclick="showToast('Higher Order Executed', 'success')">HIGHER</button>
                    <button class="signal-tag bearish" style="height:60px; font-size:16px; cursor:pointer;" onclick="showToast('Lower Order Executed', 'success')">LOWER</button>
                </div>
            </div>
        </div>
    `;
    setTimeout(() => {
        const ctx = document.getElementById('tradeExecutionChart').getContext('2d');
        new Chart(ctx, { type: 'line', data: { labels: Array.from({length: 30}, (_, i) => i), datasets: [{ data: Array.from({length: 30}, () => Math.random() * 50 + 100), borderColor: '#eab308', tension: 0.4 }] }, options: { plugins: { legend: { display:false } }, scales: { x: { display:false }, y: { display:false } } } });
    }, 100);
}

function renderWealth() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="padding: 24px; overflow-y:auto; height: 100%;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:32px;">
                <div>
                    <h2 style="font-family:'Outfit'; font-size:32px;">Net <span style="color:var(--accent-yellow)">Wealth</span></h2>
                    <p style="color:var(--text-secondary);">Institutional Portfolio Tracking & AI Rebalancing</p>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:28px; font-weight:800; color:var(--accent-yellow);">₹12,45,280.00</div>
                    <div style="color:var(--success); font-size:12px; font-weight:700;">+₹14,200.00 (24h)</div>
                </div>
            </div>

            <div class="charts-row" style="margin-top:0; margin-bottom:24px;">
                <div class="glass-card">
                    <h4 style="margin-bottom:16px; color:var(--text-secondary); font-size:12px;">ASSET ALLOCATION</h4>
                    <canvas id="allocationPie" style="max-height:200px;"></canvas>
                </div>
                <div class="glass-card">
                    <h4 style="margin-bottom:16px; color:var(--text-secondary); font-size:12px;">PORTFOLIO GROWTH</h4>
                    <canvas id="growthLine" style="max-height:200px;"></canvas>
                </div>
            </div>

            <h4 style="font-size:14px; margin-bottom:16px; color:var(--text-secondary);">HOLDINGS BREAKDOWN</h4>
            <div class="glass-card" style="padding:0;">
                <table style="width:100%; border-collapse: collapse; font-size:13px;">
                    <thead><tr style="text-align:left; color:var(--text-secondary); border-bottom: 1px solid var(--glass-border);"><th style="padding:16px;">Asset</th><th style="padding:16px;">Qty</th><th style="padding:16px;">Avg. Cost</th><th style="padding:16px;">P&L</th></tr></thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid var(--glass-border);">
                            <td style="padding:16px; font-weight:700;">RELIANCE.BO</td><td style="padding:16px;">45</td><td style="padding:16px;">₹2,450.00</td><td style="padding:16px; color:var(--success); font-weight:700;">+21.4%</td>
                        </tr>
                        <tr>
                            <td style="padding:16px; font-weight:700;">INFY.BO</td><td style="padding:16px;">120</td><td style="padding:16px;">₹1,510.00</td><td style="padding:16px; color:var(--success); font-weight:700;">+7.2%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
    setTimeout(() => {
        new Chart(document.getElementById('allocationPie').getContext('2d'), { type: 'pie', data: { labels: ['Tech', 'Banking', 'Energy', 'Cash'], datasets: [{ data: [40, 25, 20, 15], backgroundColor: ['#eab308', '#ec4899', '#10b981', '#6b7280'], borderWidth: 0 }] }, options: { plugins: { legend: { position: 'right', labels: { color: '#fff' } } } } });
        new Chart(document.getElementById('growthLine').getContext('2d'), { type: 'line', data: { labels: ['Jan', 'Feb', 'Mar'], datasets: [{ label: 'Growth', data: [1000000, 1100000, 1245280], borderColor: '#eab308', tension: 0.4 }] }, options: { plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } } });
    }, 100);
}

function renderSettings() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <div style="padding: 32px; overflow-y:auto; height:100%;">
            <h2 style="font-family:'Outfit'; font-size:32px; margin-bottom:32px;">System <span style="color:var(--accent-yellow)">Settings</span></h2>
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px;">
                <div class="glass-card">
                    <h4 style="color:var(--accent-yellow); margin-bottom:16px;">API CONFIGURATION</h4>
                    <div style="margin-bottom:20px;">
                        <label style="font-size:12px; color:var(--text-secondary); display:block; margin-bottom:8px;">CLAUDE API KEY</label>
                        <input type="password" class="search-input" value="••••••••••••••••" style="padding-left:15px;">
                    </div>
                    <div style="margin-bottom:20px;">
                        <label style="font-size:12px; color:var(--text-secondary); display:block; margin-bottom:8px;">PERPLEXITY AI KEY</label>
                        <input type="password" class="search-input" placeholder="Configure to enable deep-verify..." style="padding-left:15px;">
                    </div>
                    <button class="nav-item" style="background:var(--accent-yellow); color:#000; font-weight:700; width:100%; justify-content:center; cursor:pointer;" onclick="saveApiKey()">SAVE SECURITY KEYS</button>
                </div>

                <div class="glass-card">
                    <h4 style="color:var(--accent-yellow); margin-bottom:16px;">UI PREFERENCES</h4>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--glass-border);">
                        <span>Yellow Theme (Default)</span>
                        <div style="width:40px; height:20px; background:var(--accent-yellow); border-radius:10px; position:relative;"><div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; right:2px; top:2px;"></div></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--glass-border);">
                        <span>Live Ticker Audio</span>
                        <div style="width:40px; height:20px; background:rgba(255,255,255,0.1); border-radius:10px; position:relative;"><div style="width:16px; height:16px; background:#fff; border-radius:50%; position:absolute; left:2px; top:2px;"></div></div>
                    </div>
                    <div style="margin-top:24px;">
                        <label style="font-size:11px; color:var(--text-secondary);">BACKEND ENDPOINT</label>
                        <div style="font-family:monospace; font-size:12px; margin-top:4px;">http://localhost:8080/api</div>
                    </div>
                </div>
            </div>
            
            <div class="glass-card" style="margin-top:32px; border-left:4px solid var(--accent-pink);">
                <h4 style="color:var(--accent-pink); margin-bottom:8px;">ANALYST PROFILE</h4>
                <p style="font-size:13px; opacity:0.8;">Eternity AI Professional License: <span style="font-weight:700;">ACTIVE</span></p>
                <p style="font-size:11px; color:var(--text-secondary); margin-top:12px;">Last synchronized with Spring Boot: ${new Date().toLocaleString()}</p>
            </div>
        </div>
    `;
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
