// Eternity AI - Autonomous Features (No Backend)
// Mock AI Chat and PDF Generation Logic

function toggleChatbot() {
    const panel = document.getElementById('chatbotPanel');
    panel.classList.toggle('active');
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();
    
    if (!text) return;

    // Add User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'glass-panel';
    userDiv.style = "padding: 12px; background: rgba(234, 179, 8, 0.1); border-color: rgba(234, 179, 8, 0.3); align-self: flex-end; max-width: 80%;";
    userDiv.textContent = text;
    messages.appendChild(userDiv);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Add Typing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.className = 'glass-panel';
    typingDiv.style = "padding: 12px; background: rgba(255,255,255,0.02); align-self: flex-start; font-style: italic; color: var(--text-secondary);";
    typingDiv.textContent = "AI is analyzing order flow...";
    messages.appendChild(typingDiv);
    messages.scrollTop = messages.scrollHeight;

    // Simulate Processing Delay
    await new Promise(r => setTimeout(r, 1000));
    messages.removeChild(typingDiv);

    // Get Mock Response
    const response = getAutonomousResponse(text);

    // Add AI Message
    const aiDiv = document.createElement('div');
    aiDiv.className = 'glass-panel';
    aiDiv.style = "padding: 12px; background: rgba(255,255,255,0.02); align-self: flex-start; max-width: 90%; line-height: 1.5;";
    aiDiv.innerHTML = `<strong>Autonomous AI:</strong><br>${response}`;
    messages.appendChild(aiDiv);
    messages.scrollTop = messages.scrollHeight;
}

function getAutonomousResponse(text) {
    const msg = text.toLowerCase();
    
    if (msg.includes('trend') || msg.includes('market')) {
        return "Current BSE sentiment analysis shows a strong **BULLISH** trend. Order flow suggests institutional support at 73,200. I recommend monitoring IT and Banking stocks for immediate momentum.";
    } else if (msg.includes('infy') || msg.includes('infosys')) {
        return "Infosys (INFY.BO) is showing a **BOOM** trend with a 1.8% daily gain. My models project a target of ₹1,680 by the end of the session, supported by high volume buy orders.";
    } else if (msg.includes('risk') || msg.includes('safe')) {
        return "Market volatility is currently low (VIX at 14.5). However, protect your downside with stop-losses at order flow support levels (approx 1.5% below current price).";
    } else if (msg.includes('report')) {
        return "You can generate a detailed institutional report by clicking the **Export Report** button in the header. It will provide a PDF summary of my current projections.";
    }
    
    return "I am currently monitoring the BSE order book. I see significant liquidity pools forming around top-cap stocks. Would you like a detailed breakdown of a specific ticker?";
}

// PDF Export Logic
async function exportTrendReport() {
    const btn = document.getElementById('exportReportBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 800));

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const W = doc.internal.pageSize.getWidth();
        let y = 20;

        // Header
        doc.setFillColor(17, 24, 39);
        doc.rect(0, 0, W, 42, 'F');
        doc.setFontSize(26);
        doc.setTextColor(234, 179, 8);
        doc.text('Eternity AI', 15, 22);
        doc.setFontSize(11);
        doc.setTextColor(156, 163, 175);
        doc.text('Institutional Market Analysis Report', 15, 32);
        doc.setFontSize(9);
        doc.text('Generated: ' + new Date().toLocaleString(), W - 15, 32, { align: 'right' });
        y = 52;

        // Executive Summary
        doc.setFontSize(15);
        doc.setTextColor(234, 179, 8);
        doc.text('Executive Summary', 15, y);
        y += 8;
        doc.autoTable({
            startY: y,
            head: [['Metric', 'Value']],
            body: [
                ['Market Sentiment', 'BULLISH'],
                ['Sentiment Score', '82/100'],
                ['AI Confidence', '94.2%'],
                ['Market Mode', 'Autonomous (Client-Side Intelligence)']
            ],
            theme: 'grid',
            headStyles: { fillColor: [234, 179, 8], textColor: 0, fontStyle: 'bold' },
            margin: { left: 15, right: 15 }
        });
        y = doc.lastAutoTable.finalY + 12;

        // Analysis
        doc.setFontSize(15);
        doc.setTextColor(234, 179, 8);
        doc.text('AI-Generated Insight', 15, y);
        y += 8;
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const insights = "Institutional order flow detected at 73,200 BSE SENSEX support. AI confidence suggests continued mid-cap accumulation. Relative Strength Index (RSI) across major indices indicates no immediate overbought conditions. Recommendation: Stay overweight in A-group equities with a focus on margin expansion in Tier-1 IT services.";
        const lines = doc.splitTextToSize(insights, W - 30);
        doc.text(lines, 15, y);
        y += lines.length * 5 + 8;

        // Sector Breakdown
        doc.autoTable({
            startY: y,
            head: [['Sector', 'Performance', 'Signal']],
            body: [
                ['Tech', '+2.4%', 'BOOM'],
                ['Banking', '+2.8%', 'STABLE'],
                ['Pharma', '-0.5%', 'WEAK'],
                ['Auto', '+1.5%', 'RECOVERY']
            ],
            theme: 'striped',
            headStyles: { fillColor: [17, 24, 39], textColor: [234, 179, 8] },
            margin: { left: 15, right: 15 }
        });

        doc.save(`Eternity_AI_Report_${Date.now()}.pdf`);
        showToast('Report downloaded successfully!', 'success');
    } catch (err) {
        console.error(err);
        showToast('Error generating PDF', 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

function showToast(msg, type) {
    const toast = document.createElement('div');
    toast.style = `position: fixed; top: 20px; right: 20px; padding: 12px 24px; border-radius: 12px; color: white; background: ${type==='success' ? '#10b981' : '#ef4444'}; z-index: 2001; transition: opacity 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.3);`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}
