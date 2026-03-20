// Eternity AI - Autonomous Features (3-Column Theme)
// Autonomous Chat and PDF Generation Logic

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();
    
    if (!text) return;

    // Add User Message (Yellow styled)
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-bubble';
    userDiv.style = "background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); align-self: flex-end; color: #fff;";
    userDiv.textContent = text;
    messages.appendChild(userDiv);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Add Typing Indicator
    const typingDiv = document.createElement('div');
    typingDiv.style = "font-size: 11px; font-style: italic; color: var(--text-secondary); margin-left: 12px;";
    typingDiv.textContent = "Analyzing BSE Order Flow...";
    messages.appendChild(typingDiv);
    messages.scrollTop = messages.scrollHeight;

    // Simulate Processing Delay
    await new Promise(r => setTimeout(r, 1200));
    messages.removeChild(typingDiv);

    // Get Mock Response
    const response = getAutonomousResponse(text);

    // Add AI Message (Pink styled per screenshot logic)
    const aiDiv = document.createElement('div');
    aiDiv.className = 'chat-bubble ai-bubble';
    aiDiv.innerHTML = response;
    messages.appendChild(aiDiv);
    messages.scrollTop = messages.scrollHeight;
}

function getAutonomousResponse(text) {
    const msg = text.toLowerCase();
    
    if (msg.includes('trend') || msg.includes('market')) {
        return "BSE SENSEX sentiment is currently **BULLISH**. Order flow indicates a primary support zone at 73,200. Continued mid-cap accumulation is expected.";
    } else if (msg.includes('infy')) {
        return "Infosys (INFY.BO) is leading the IT sector today with a 1.8% daily gain. My models project a target of ₹1,680 based on institutional volume spikes.";
    } else if (msg.includes('report')) {
        return "You can download the full Institutional Multi-Page Report by clicking the **YELLOW** button below. It contains 30-day projections and sector heatmaps.";
    }
    
    return "Eternity AI is monitoring the order depth. There is significant liquidity forming in the Banking sector. How can I assist you with your trade analysis?";
}

// PDF Export Logic (Yellow/Pink Themed)
async function exportTrendReport() {
    const btn = document.getElementById('exportReportBtn') || event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Generating...';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1200));

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const W = doc.internal.pageSize.getWidth();
        let y = 20;

        // Dark Background Header
        doc.setFillColor(5, 5, 16);
        doc.rect(0, 0, W, 45, 'F');
        doc.setFontSize(28);
        doc.setTextColor(236, 72, 153); // Pink
        doc.text('Eternity AI', 15, 22);
        doc.setFontSize(10);
        doc.setTextColor(234, 179, 8); // Yellow
        doc.text('Institutional Market Analysis Report (AUTONOMOUS)', 15, 32);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('Date: ' + new Date().toLocaleString(), W - 15, 32, { align: 'right' });
        y = 55;

        // Summary Table
        doc.setFontSize(14);
        doc.setTextColor(234, 179, 8);
        doc.text('Executive Market Summary', 15, y);
        y += 8;
        doc.autoTable({
            startY: y,
            head: [['Indicator', 'Value', 'Status']],
            body: [
                ['Market Sentiment', '82/100', 'BULLISH'],
                ['BSE Order Depth', 'High', 'NOMINAL'],
                ['Alpha Deviation', '+1.2%', 'HEALTHY'],
                ['AI Confidence', '94.2%', 'SECURE']
            ],
            theme: 'grid',
            headStyles: { fillColor: [234, 179, 8], textColor: 0 },
            margin: { left: 15, right: 15 }
        });
        y = doc.lastAutoTable.finalY + 15;

        // Written Analysis
        doc.setFontSize(14);
        doc.setTextColor(236, 72, 153);
        doc.text('Institutional Insight', 15, y);
        y += 8;
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        const analysis = "Current market variance remains stable with a primary focus on sectoral rotations. The IT sector (led by INFY and TCS) is showing relative strength above the 200-day EMA. Institutional accumulation is noted in private sector banks. Risk posture remains cautious but positive for the T+5 window.";
        const lines = doc.splitTextToSize(analysis, W - 30);
        doc.text(lines, 15, y);

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
    toast.style = `position: fixed; top: 20px; right: 20px; padding: 12px 24px; border-radius: 12px; color: white; background: ${type==='success' ? '#10b981' : '#ef4444'}; z-index: 2001; transition: opacity 0.3s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.3); font-size: 13px; font-weight: 600;`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}
