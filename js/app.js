/**
 * CHATTAL FOOTBALL CLUB — MANAGEMENT & MATCHDAY SYSTEM
 * Pure Vanilla JavaScript ES6+ Architecture
 * Offline-First with LocalStorage Persistence
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'CHATTAL_FC_STORAGE_V1';

  // Default Club Profile & Configuration
  const DEFAULT_STATE = {
    club: {
      name: 'Chattal Football Club',
      shortName: 'Chattal FC',
      motto: 'Pride of Chattal Village • Established 2024',
      homeGround: 'Chattal Main Sports Ground',
      defaultFee: 500,
      whatsappGroup: 'Chattal FC Official Group'
    },
    paymentAccounts: {
      jazzcash: {
        title: 'Chattal FC Official',
        number: '0300-1234567'
      },
      easypaisa: {
        title: 'Chattal FC Treasurer',
        number: '0345-7654321'
      },
      bank: {
        name: 'Habib Bank Ltd (HBL)',
        title: 'Chattal Sports Club',
        iban: 'PK00 HABB 0001 2345 6789 01'
      }
    },
    currentMonth: 'October 2026',
    players: [
      {
        id: 'p-1',
        name: 'Ali Raza',
        fatherName: 'Muhammad Raza',
        phone: '03001234561',
        position: 'FWD',
        jersey: 10,
        role: 'Captain',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'JazzCash',
        trxId: 'JC-90281923',
        datePaid: '2026-10-02',
        joinedDate: '2024-03-15'
      },
      {
        id: 'p-2',
        name: 'Usman Tariq',
        fatherName: 'Tariq Mehmood',
        phone: '03001234562',
        position: 'GK',
        jersey: 1,
        role: 'Vice-Captain',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'EasyPaisa',
        trxId: 'EP-44129901',
        datePaid: '2026-10-03',
        joinedDate: '2024-03-15'
      },
      {
        id: 'p-3',
        name: 'Hamza Farooq',
        fatherName: 'Farooq Ahmed',
        phone: '03001234563',
        position: 'DEF',
        jersey: 4,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'Bank',
        trxId: 'HBL-991283',
        datePaid: '2026-10-04',
        joinedDate: '2024-04-10'
      },
      {
        id: 'p-4',
        name: 'Bilal Khan',
        fatherName: 'Sultan Khan',
        phone: '03001234564',
        position: 'DEF',
        jersey: 5,
        role: 'Player',
        status: 'Active',
        feeStatus: 'UNPAID',
        paymentMethod: '',
        trxId: '',
        datePaid: '',
        joinedDate: '2024-05-01'
      },
      {
        id: 'p-5',
        name: 'Farhan Ali',
        fatherName: 'Ali Asghar',
        phone: '03001234565',
        position: 'DEF',
        jersey: 3,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'Cash',
        trxId: 'Handover to Coach',
        datePaid: '2026-10-01',
        joinedDate: '2024-06-12'
      },
      {
        id: 'p-6',
        name: 'Daniyal Munir',
        fatherName: 'Munir Hussain',
        phone: '03001234566',
        position: 'DEF',
        jersey: 2,
        role: 'Player',
        status: 'Active',
        feeStatus: 'UNPAID',
        paymentMethod: '',
        trxId: '',
        datePaid: '',
        joinedDate: '2024-07-20'
      },
      {
        id: 'p-7',
        name: 'Saad Malik',
        fatherName: 'Malik Akram',
        phone: '03001234567',
        position: 'MID',
        jersey: 8,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'JazzCash',
        trxId: 'JC-88129304',
        datePaid: '2026-10-05',
        joinedDate: '2024-04-05'
      },
      {
        id: 'p-8',
        name: 'Zeeshan Haider',
        fatherName: 'Ghulam Haider',
        phone: '03001234568',
        position: 'MID',
        jersey: 6,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'EasyPaisa',
        trxId: 'EP-55910293',
        datePaid: '2026-10-02',
        joinedDate: '2024-05-18'
      },
      {
        id: 'p-9',
        name: 'Kamran Shah',
        fatherName: 'Syed Shah',
        phone: '03001234569',
        position: 'MID',
        jersey: 11,
        role: 'Player',
        status: 'Active',
        feeStatus: 'UNPAID',
        paymentMethod: '',
        trxId: '',
        datePaid: '',
        joinedDate: '2024-08-01'
      },
      {
        id: 'p-10',
        name: 'Shahzaib Butt',
        fatherName: 'Nadeem Butt',
        phone: '03001234570',
        position: 'FWD',
        jersey: 9,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'JazzCash',
        trxId: 'JC-11029384',
        datePaid: '2026-10-03',
        joinedDate: '2024-03-20'
      },
      {
        id: 'p-11',
        name: 'Zain Ul Abideen',
        fatherName: 'Abid Hussain',
        phone: '03001234571',
        position: 'FWD',
        jersey: 17,
        role: 'Player',
        status: 'Active',
        feeStatus: 'PAID',
        paymentMethod: 'EasyPaisa',
        trxId: 'EP-77192834',
        datePaid: '2026-10-04',
        joinedDate: '2024-06-15'
      },
      {
        id: 'p-12',
        name: 'Waqas Ahmed',
        fatherName: 'Ahmed Din',
        phone: '03001234572',
        position: 'GK',
        jersey: 13,
        role: 'Player',
        status: 'Substitute',
        feeStatus: 'UNPAID',
        paymentMethod: '',
        trxId: '',
        datePaid: '',
        joinedDate: '2024-09-01'
      },
      {
        id: 'p-13',
        name: 'Mudassar Iqbal',
        fatherName: 'Iqbal Javed',
        phone: '03001234573',
        position: 'DEF',
        jersey: 14,
        role: 'Player',
        status: 'Substitute',
        feeStatus: 'PAID',
        paymentMethod: 'Cash',
        trxId: 'Paid at Ground',
        datePaid: '2026-10-01',
        joinedDate: '2024-08-10'
      },
      {
        id: 'p-14',
        name: 'Ahsan Qureshi',
        fatherName: 'Tahir Qureshi',
        phone: '03001234574',
        position: 'MID',
        jersey: 15,
        role: 'Player',
        status: 'Substitute',
        feeStatus: 'PENDING',
        paymentMethod: 'JazzCash',
        trxId: 'JC-PendingSlip-01',
        datePaid: '2026-10-06',
        joinedDate: '2024-09-12'
      }
    ],
    pendingRegistrations: [
      {
        id: 'pr-1',
        name: 'Talha Mehmood',
        fatherName: 'Mehmood Ul Hassan',
        phone: '03129876543',
        position: 'FWD',
        jersey: 18,
        foot: 'Right',
        paymentMethod: 'JazzCash',
        trxId: 'TID: 8892019482',
        submittedAt: '2026-10-06 14:20'
      }
    ],
    nextMatch: {
      type: 'HOME',
      opponent: 'Taring Football Club',
      date: '2026-10-12',
      time: '16:30',
      reportingTime: '15:45',
      venue: 'Chattal Main Sports Ground',
      kitColor: 'Emerald Green & White',
      notes: 'All players must arrive by 3:45 PM for warm-up. Bring boots & shin pads.'
    },
    lineup: {
      formation: '4-3-3',
      matchName: 'Chattal FC vs Taring FC',
      assigned: {
        'GK': 'p-2',
        'LB': 'p-5',
        'CB1': 'p-3',
        'CB2': 'p-4',
        'RB': 'p-6',
        'CM1': 'p-7',
        'CDM': 'p-8',
        'CM2': 'p-9',
        'LW': 'p-11',
        'ST': 'p-10',
        'RW': 'p-1'
      },
      bench: ['p-12', 'p-13', 'p-14']
    }
  };

  // Formation slot definitions for tactical board
  const FORMATION_SCHEMAS = {
    '4-3-3': [
      { row: 'Attack', slots: [{ id: 'LW', label: 'LW' }, { id: 'ST', label: 'ST' }, { id: 'RW', label: 'RW' }] },
      { row: 'Midfield', slots: [{ id: 'CM1', label: 'LCM' }, { id: 'CDM', label: 'CDM' }, { id: 'CM2', label: 'RCM' }] },
      { row: 'Defense', slots: [{ id: 'LB', label: 'LB' }, { id: 'CB1', label: 'LCB' }, { id: 'CB2', label: 'RCB' }, { id: 'RB', label: 'RB' }] },
      { row: 'Goalkeeper', slots: [{ id: 'GK', label: 'GK', isGk: true }] }
    ],
    '4-4-2': [
      { row: 'Attack', slots: [{ id: 'ST1', label: 'LS' }, { id: 'ST2', label: 'RS' }] },
      { row: 'Midfield', slots: [{ id: 'LM', label: 'LM' }, { id: 'CM1', label: 'LCM' }, { id: 'CM2', label: 'RCM' }, { id: 'RM', label: 'RM' }] },
      { row: 'Defense', slots: [{ id: 'LB', label: 'LB' }, { id: 'CB1', label: 'LCB' }, { id: 'CB2', label: 'RCB' }, { id: 'RB', label: 'RB' }] },
      { row: 'Goalkeeper', slots: [{ id: 'GK', label: 'GK', isGk: true }] }
    ],
    '3-5-2': [
      { row: 'Attack', slots: [{ id: 'ST1', label: 'LS' }, { id: 'ST2', label: 'RS' }] },
      { row: 'Midfield', slots: [{ id: 'LWB', label: 'LWB' }, { id: 'CM1', label: 'CM' }, { id: 'CAM', label: 'CAM' }, { id: 'CM2', label: 'CM' }, { id: 'RWB', label: 'RWB' }] },
      { row: 'Defense', slots: [{ id: 'CB1', label: 'LCB' }, { id: 'CB2', label: 'CB' }, { id: 'CB3', label: 'RCB' }] },
      { row: 'Goalkeeper', slots: [{ id: 'GK', label: 'GK', isGk: true }] }
    ],
    '4-2-3-1': [
      { row: 'Attack', slots: [{ id: 'ST', label: 'ST' }] },
      { row: 'Attacking Mid', slots: [{ id: 'LAM', label: 'LAM' }, { id: 'CAM', label: 'CAM' }, { id: 'RAM', label: 'RAM' }] },
      { row: 'Defensive Mid', slots: [{ id: 'CDM1', label: 'LDM' }, { id: 'CDM2', label: 'RDM' }] },
      { row: 'Defense', slots: [{ id: 'LB', label: 'LB' }, { id: 'CB1', label: 'LCB' }, { id: 'CB2', label: 'RCB' }, { id: 'RB', label: 'RB' }] },
      { row: 'Goalkeeper', slots: [{ id: 'GK', label: 'GK', isGk: true }] }
    ],
    '7-a-side': [
      { row: 'Attack', slots: [{ id: 'ST', label: 'Striker' }] },
      { row: 'Midfield', slots: [{ id: 'LM', label: 'LM' }, { id: 'CM', label: 'CM' }, { id: 'RM', label: 'RM' }] },
      { row: 'Defense', slots: [{ id: 'CB1', label: 'LCB' }, { id: 'CB2', label: 'RCB' }] },
      { row: 'Goalkeeper', slots: [{ id: 'GK', label: 'GK', isGk: true }] }
    ]
  };

  // State Container
  let state = {};

  // Active filter states
  const filters = {
    search: '',
    position: 'ALL',
    feeStatus: 'ALL',
    role: 'ALL',
    viewMode: 'table' // 'table' or 'grid'
  };

  const feeFilters = {
    search: '',
    status: 'ALL'
  };

  let activeSlotToAssign = null;
  let activeWaTemplate = 'match';

  // ==================== CORE INITIALIZATION ====================
  function init() {
    loadState();
    bindEvents();
    renderAll();
  }

  function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        state = JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse localStorage data, restoring defaults.', e);
        state = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
      }
    } else {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      saveState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // ==================== EVENT BINDINGS ====================
  function bindEvents() {
    // Navigation Tabs
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Mobile Sidebar Toggle
    const openSidebarBtn = document.getElementById('openSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const appSidebar = document.getElementById('appSidebar');

    if (openSidebarBtn && appSidebar) {
      openSidebarBtn.addEventListener('click', () => appSidebar.classList.add('sidebar-open'));
    }
    if (closeSidebarBtn && appSidebar) {
      closeSidebarBtn.addEventListener('click', () => appSidebar.classList.remove('sidebar-open'));
    }

    // Topbar Quick Actions
    document.getElementById('btnQuickMatchAlert')?.addEventListener('click', () => {
      switchTab('whatsapp');
      setWaTemplate('match');
    });

    document.getElementById('btnQuickAddPlayer')?.addEventListener('click', () => {
      openPlayerModal();
    });

    // Hero Banner Actions
    document.getElementById('heroShareWhatsappBtn')?.addEventListener('click', () => {
      switchTab('whatsapp');
      setWaTemplate('match');
    });

    document.getElementById('heroEditMatchBtn')?.addEventListener('click', () => {
      switchTab('whatsapp');
      setWaTemplate('match');
    });

    // Player Search & Filters
    document.getElementById('playerSearchInput')?.addEventListener('input', (e) => {
      filters.search = e.target.value.toLowerCase();
      renderPlayersList();
    });

    document.getElementById('filterPosition')?.addEventListener('change', (e) => {
      filters.position = e.target.value;
      renderPlayersList();
    });

    document.getElementById('filterFeeStatus')?.addEventListener('change', (e) => {
      filters.feeStatus = e.target.value;
      renderPlayersList();
    });

    document.getElementById('filterRole')?.addEventListener('change', (e) => {
      filters.role = e.target.value;
      renderPlayersList();
    });

    // View Mode Toggles
    document.getElementById('viewModeTable')?.addEventListener('click', () => {
      filters.viewMode = 'table';
      document.getElementById('viewModeTable')?.classList.add('active');
      document.getElementById('viewModeGrid')?.classList.remove('active');
      document.getElementById('playersTableView')?.classList.remove('hidden');
      document.getElementById('playersCardsView')?.classList.add('hidden');
    });

    document.getElementById('viewModeGrid')?.addEventListener('click', () => {
      filters.viewMode = 'grid';
      document.getElementById('viewModeGrid')?.classList.add('active');
      document.getElementById('viewModeTable')?.classList.remove('active');
      document.getElementById('playersTableView')?.classList.add('hidden');
      document.getElementById('playersCardsView')?.classList.remove('hidden');
    });

    document.getElementById('btnOpenAddPlayerModal')?.addEventListener('click', () => openPlayerModal());
    document.getElementById('btnExportPlayersCSV')?.addEventListener('click', exportPlayersCSV);

    // Lineup Formation & Pitch Controls
    document.getElementById('lineupFormationSelect')?.addEventListener('change', (e) => {
      state.lineup.formation = e.target.value;
      saveState();
      renderPitch();
    });

    document.getElementById('lineupMatchName')?.addEventListener('input', (e) => {
      state.lineup.matchName = e.target.value;
      saveState();
      document.getElementById('pitchMatchLabel').textContent = e.target.value || 'Official Match Squad';
    });

    document.getElementById('btnShareLineupWhatsapp')?.addEventListener('click', shareLineupToWhatsapp);
    document.getElementById('btnDownloadPitchImage')?.addEventListener('click', downloadPitchImage);
    document.getElementById('btnClearLineup')?.addEventListener('click', resetLineup);

    document.getElementById('rosterSearchInput')?.addEventListener('input', (e) => {
      renderRosterSquadList(e.target.value.toLowerCase());
    });

    // Fee Tab Controls
    document.getElementById('feeSearchInput')?.addEventListener('input', (e) => {
      feeFilters.search = e.target.value.toLowerCase();
      renderFeeTable();
    });

    document.getElementById('feeStatusFilter')?.addEventListener('change', (e) => {
      feeFilters.status = e.target.value;
      renderFeeTable();
    });

    document.getElementById('btnBroadcastUnpaidFees')?.addEventListener('click', () => {
      switchTab('whatsapp');
      setWaTemplate('fees');
    });

    document.getElementById('btnExportFeeReport')?.addEventListener('click', exportFeeStatement);

    // WhatsApp Studio Template Switchers
    document.querySelectorAll('.wa-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        setWaTemplate(type);
      });
    });

    // WhatsApp Input change listeners to update live preview
    const waInputs = [
      'waMatchType', 'waOpponentName', 'waMatchDate', 'waMatchTime', 'waReportingTime',
      'waVenue', 'waKitColor', 'waIncludeSquadCheckbox', 'waMatchNotes',
      'waFeeMonth', 'waIncludeAccountDetails', 'waFeeNote',
      'waGeneralTitle', 'waGeneralDateTime', 'waGeneralVenue', 'waGeneralDesc',
      'waResultOurGoals', 'waResultOppGoals', 'waResultOppName', 'waResultScorers', 'waResultMotm',
      'waCustomText'
    ];

    waInputs.forEach(id => {
      document.getElementById(id)?.addEventListener('input', updateWaLivePreview);
      document.getElementById(id)?.addEventListener('change', updateWaLivePreview);
    });

    document.getElementById('btnSendWhatsappDirect')?.addEventListener('click', sendWhatsappDirect);
    document.getElementById('btnCopyWhatsappText')?.addEventListener('click', copyWhatsappText);

    // Flyer Controls
    document.getElementById('flyerThemeSelect')?.addEventListener('change', updateFlyerDesign);
    document.getElementById('flyerTypeSelect')?.addEventListener('change', updateFlyerDesign);
    document.getElementById('flyerSubheading')?.addEventListener('input', updateFlyerDesign);
    document.getElementById('flyerOpponentName')?.addEventListener('input', updateFlyerDesign);
    document.getElementById('flyerDateTime')?.addEventListener('input', updateFlyerDesign);
    document.getElementById('flyerGround')?.addEventListener('input', updateFlyerDesign);
    document.getElementById('flyerTagline')?.addEventListener('input', updateFlyerDesign);
    document.getElementById('btnDownloadFlyerPNG')?.addEventListener('click', downloadFlyerPNG);
    document.getElementById('btnShareFlyerWhatsapp')?.addEventListener('click', () => {
      switchTab('whatsapp');
      setWaTemplate('match');
    });
  }

  // ==================== NAVIGATION CONTROLLER ====================
  function switchTab(tabId) {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    const target = document.getElementById(`pane-${tabId}`);
    if (target) {
      target.classList.add('active');
    }

    // Update Topbar Titles
    const titleEl = document.getElementById('pageTitle');
    const subtitleEl = document.getElementById('pageSubtitle');
    
    const titles = {
      dashboard: { title: 'Club Dashboard', sub: 'Real-time statistics, players, and matchday operations' },
      players: { title: 'Players & Squad Roster', sub: 'Directory, roles, positions, and contact details' },
      lineup: { title: 'Tactical Match Lineup', sub: 'Interactive pitch visualizer and matchday squad selection' },
      fees: { title: 'Monthly Fees & Dues', sub: 'Track membership dues, JazzCash / EasyPaisa / Bank receipts' },
      whatsapp: { title: 'WhatsApp Broadcast Studio', sub: 'Instant one-tap notices formatted for village WhatsApp groups' },
      flyers: { title: 'Matchday Flyer & Poster Studio', sub: 'Export high-definition graphics for WhatsApp Status and Stories' },
      registration: { title: 'Player Self-Registration Portal', sub: 'Online entry submission link for village football players' },
      settings: { title: 'Club Settings & Accounts', sub: 'Configure JazzCash, EasyPaisa, Bank, and club profile' }
    };

    if (titles[tabId] && titleEl && subtitleEl) {
      titleEl.textContent = titles[tabId].title;
      subtitleEl.textContent = titles[tabId].sub;
    }

    // Close mobile sidebar on select
    document.getElementById('appSidebar')?.classList.remove('sidebar-open');

    // Tab-specific re-renders
    if (tabId === 'dashboard') renderDashboard();
    if (tabId === 'players') renderPlayersList();
    if (tabId === 'lineup') renderPitch();
    if (tabId === 'fees') renderFeeTable();
    if (tabId === 'whatsapp') updateWaLivePreview();
    if (tabId === 'flyers') updateFlyerDesign();
  }

  // ==================== RENDERING ENGINE ====================
  function renderAll() {
    renderBranding();
    renderDashboard();
    renderPlayersList();
    renderPitch();
    renderFeeTable();
    renderPendingQueue();
    updateWaLivePreview();
    updateFlyerDesign();
    populateSettingsForm();
  }

  function renderBranding() {
    document.getElementById('sidebarClubName').textContent = state.club.shortName || 'CHATTAL FC';
    document.getElementById('sidebarClubMotto').textContent = state.club.motto || 'Pride of Chattal Village';
    document.getElementById('pitchClubName').textContent = (state.club.shortName || 'CHATTAL FC').toUpperCase();
    document.getElementById('displayDefaultFeeAmount').textContent = `Rs. ${state.club.defaultFee || 500} / player`;
    document.getElementById('regFeeAmountDisplay').textContent = state.club.defaultFee || 500;

    // Payment Info Displays
    document.getElementById('pmJazzcashTitle').textContent = state.paymentAccounts.jazzcash.title;
    document.getElementById('pmJazzcashNumber').textContent = state.paymentAccounts.jazzcash.number;
    document.getElementById('pmEasypaisaTitle').textContent = state.paymentAccounts.easypaisa.title;
    document.getElementById('pmEasypaisaNumber').textContent = state.paymentAccounts.easypaisa.number;
    document.getElementById('pmBankTitle').textContent = state.paymentAccounts.bank.name;
    document.getElementById('pmBankIban').textContent = state.paymentAccounts.bank.iban;

    // Reg Info Box
    document.getElementById('regInfoJcTitle').textContent = state.paymentAccounts.jazzcash.title;
    document.getElementById('regInfoJcNumber').textContent = state.paymentAccounts.jazzcash.number;
    document.getElementById('regInfoEpTitle').textContent = state.paymentAccounts.easypaisa.title;
    document.getElementById('regInfoEpNumber').textContent = state.paymentAccounts.easypaisa.number;
    document.getElementById('regInfoBankName').textContent = state.paymentAccounts.bank.name;
    document.getElementById('regInfoBankTitle').textContent = state.paymentAccounts.bank.title;
    document.getElementById('regInfoBankIban').textContent = state.paymentAccounts.bank.iban;
  }

  // ==================== DASHBOARD ====================
  function renderDashboard() {
    const totalPlayers = state.players.length;
    const activePlayers = state.players.filter(p => p.status === 'Active').length;
    const paidPlayers = state.players.filter(p => p.feeStatus === 'PAID').length;
    const unpaidPlayers = state.players.filter(p => p.feeStatus === 'UNPAID').length;
    const pendingPlayers = state.players.filter(p => p.feeStatus === 'PENDING').length;
    const feeAmount = state.club.defaultFee || 500;

    const totalCollected = paidPlayers * feeAmount;
    const totalPending = (unpaidPlayers + pendingPlayers) * feeAmount;
    const pendingApprovalsCount = state.pendingRegistrations.length;

    // Update KPI counters
    document.getElementById('kpiTotalPlayers').textContent = totalPlayers;
    document.getElementById('kpiActivePlayers').textContent = `${activePlayers} Active Members`;
    document.getElementById('kpiFeesCollected').textContent = `Rs. ${totalCollected.toLocaleString()}`;
    document.getElementById('kpiPaidPlayersCount').textContent = `${paidPlayers} Players Paid`;
    document.getElementById('kpiFeesPending').textContent = `Rs. ${totalPending.toLocaleString()}`;
    document.getElementById('kpiUnpaidPlayersCount').textContent = `${unpaidPlayers + pendingPlayers} Pending Dues`;
    document.getElementById('kpiPendingApprovals').textContent = pendingApprovalsCount;

    // Badges in sidebar
    document.getElementById('navPlayerCount').textContent = totalPlayers;
    document.getElementById('navUnpaidCount').textContent = unpaidPlayers + pendingPlayers;
    document.getElementById('navPendingCount').textContent = pendingApprovalsCount;

    // Hero match preview
    const match = state.nextMatch || DEFAULT_STATE.nextMatch;
    document.getElementById('dashNextMatchTitle').textContent = `${state.club.shortName} vs ${match.opponent}`;
    document.getElementById('dashNextMatchDetails').innerHTML = `
      <span><i class="fa-regular fa-calendar-days"></i> ${formatDate(match.date)} • ${match.time}</span>
      <span><i class="fa-solid fa-location-dot"></i> ${match.venue}</span>
    `;

    // Position Stats Breakdown
    const gks = state.players.filter(p => p.position === 'GK').length;
    const defs = state.players.filter(p => p.position === 'DEF').length;
    const mids = state.players.filter(p => p.position === 'MID').length;
    const fwds = state.players.filter(p => p.position === 'FWD').length;

    const statsContainer = document.getElementById('dashPositionStats');
    if (statsContainer) {
      statsContainer.innerHTML = `
        <div class="pos-stat-item">
          <span class="pos-stat-code">GK</span>
          <div class="pos-stat-count">${gks}</div>
          <span class="pos-stat-label">Goalkeepers</span>
        </div>
        <div class="pos-stat-item">
          <span class="pos-stat-code">DEF</span>
          <div class="pos-stat-count">${defs}</div>
          <span class="pos-stat-label">Defenders</span>
        </div>
        <div class="pos-stat-item">
          <span class="pos-stat-code">MID</span>
          <div class="pos-stat-count">${mids}</div>
          <span class="pos-stat-label">Midfielders</span>
        </div>
        <div class="pos-stat-item">
          <span class="pos-stat-code">FWD</span>
          <div class="pos-stat-count">${fwds}</div>
          <span class="pos-stat-label">Attackers</span>
        </div>
      `;
    }

    // Mini Account Chips on Dashboard
    const accountsContainer = document.getElementById('dashAccountsPreview');
    if (accountsContainer) {
      accountsContainer.innerHTML = `
        <div class="acc-mini-chip">
          <span><span class="acc-badge acc-jc">JazzCash</span> <strong>${state.paymentAccounts.jazzcash.number}</strong> (${state.paymentAccounts.jazzcash.title})</span>
          <button class="btn btn-outline-light btn-xs" onclick="app.copyPaymentDetails('JazzCash')"><i class="fa-regular fa-copy"></i></button>
        </div>
        <div class="acc-mini-chip">
          <span><span class="acc-badge acc-ep">EasyPaisa</span> <strong>${state.paymentAccounts.easypaisa.number}</strong> (${state.paymentAccounts.easypaisa.title})</span>
          <button class="btn btn-outline-light btn-xs" onclick="app.copyPaymentDetails('EasyPaisa')"><i class="fa-regular fa-copy"></i></button>
        </div>
        <div class="acc-mini-chip">
          <span><span class="acc-badge acc-bank">Bank</span> <strong>${state.paymentAccounts.bank.name}</strong></span>
          <button class="btn btn-outline-light btn-xs" onclick="app.copyPaymentDetails('Bank')"><i class="fa-regular fa-copy"></i></button>
        </div>
      `;
    }
  }

  // ==================== PLAYERS & SQUAD ====================
  function getFilteredPlayers() {
    return state.players.filter(player => {
      // Search filter
      const matchesSearch = !filters.search ||
        player.name.toLowerCase().includes(filters.search) ||
        player.phone.includes(filters.search) ||
        (player.jersey && player.jersey.toString().includes(filters.search));

      // Position filter
      const matchesPos = filters.position === 'ALL' || player.position === filters.position;

      // Fee status filter
      const matchesFee = filters.feeStatus === 'ALL' || player.feeStatus === filters.feeStatus;

      // Role filter
      const matchesRole = filters.role === 'ALL' || player.role === filters.role;

      return matchesSearch && matchesPos && matchesFee && matchesRole;
    });
  }

  function renderPlayersList() {
    const list = getFilteredPlayers();
    const tableBody = document.getElementById('playersTableBody');
    const cardsContainer = document.getElementById('playersCardsView');
    const emptyState = document.getElementById('playersEmptyState');
    const summary = document.getElementById('playerTableSummary');

    if (summary) {
      summary.textContent = `Showing ${list.length} of ${state.players.length} players`;
    }

    if (list.length === 0) {
      tableBody.innerHTML = '';
      cardsContainer.innerHTML = '';
      emptyState?.classList.remove('hidden');
      return;
    } else {
      emptyState?.classList.add('hidden');
    }

    // 1. Table View Rendering
    let tableHtml = '';
    list.forEach((p, idx) => {
      const feeBadge = getFeeBadge(p.feeStatus);
      const posBadge = `<span class="pos-badge pos-${p.position}">${p.position}</span>`;
      const roleTag = p.role !== 'Player' ? `<span class="role-tag captain">${p.role}</span>` : `<span class="role-tag">Player</span>`;

      tableHtml += `
        <tr>
          <td><span class="jersey-badge">${p.jersey || '-'}</span></td>
          <td>
            <div class="player-name-cell">
              <div class="player-names">
                <span class="p-name">${escapeHtml(p.name)}</span>
                <span class="p-sub">${p.fatherName ? `S/O ${escapeHtml(p.fatherName)}` : 'Chattal FC'}</span>
              </div>
            </div>
          </td>
          <td>${posBadge}</td>
          <td>
            <a href="https://wa.me/${cleanPhone(p.phone)}" target="_blank" class="btn-link" title="Chat on WhatsApp">
              <i class="fa-brands fa-whatsapp text-whatsapp"></i> ${escapeHtml(p.phone)}
            </a>
          </td>
          <td>${roleTag}</td>
          <td>${feeBadge}</td>
          <td><span class="status-pill ${p.status === 'Active' ? 'status-paid' : 'status-pending'}">${p.status}</span></td>
          <td>
            <div class="table-actions">
              <button class="action-btn-sm btn-wa-action" onclick="app.sendPlayerFeeReminder('${p.id}')" title="Send WhatsApp Fee Reminder">
                <i class="fa-brands fa-whatsapp"></i>
              </button>
              <button class="action-btn-sm" onclick="app.openPaymentModal('${p.id}')" title="Update Payment Record">
                <i class="fa-solid fa-receipt"></i>
              </button>
              <button class="action-btn-sm" onclick="app.openPlayerModal('${p.id}')" title="Edit Player">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button class="action-btn-sm btn-del-action" onclick="app.deletePlayer('${p.id}')" title="Delete Player">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    });
    tableBody.innerHTML = tableHtml;

    // 2. Card Grid Rendering
    let gridHtml = '';
    list.forEach(p => {
      const feeBadge = getFeeBadge(p.feeStatus);
      gridHtml += `
        <div class="player-grid-card">
          <div class="pgc-top">
            <span class="jersey-badge">${p.jersey || '-'}</span>
            <div class="pgc-info">
              <span class="pgc-name">${escapeHtml(p.name)}</span>
              <span class="pgc-phone"><i class="fa-brands fa-whatsapp text-whatsapp"></i> ${escapeHtml(p.phone)}</span>
            </div>
            <span class="pos-badge pos-${p.position}">${p.position}</span>
          </div>
          <div class="pgc-meta-row">
            <div>${p.role !== 'Player' ? `<span class="role-tag captain">${p.role}</span>` : `<span class="role-tag">Player</span>`}</div>
            <div>${feeBadge}</div>
          </div>
          <div class="pgc-actions">
            <button class="btn btn-whatsapp btn-sm btn-block" onclick="app.sendPlayerFeeReminder('${p.id}')">
              <i class="fa-brands fa-whatsapp"></i> Reminder
            </button>
            <button class="btn btn-outline-light btn-sm" onclick="app.openPaymentModal('${p.id}')">
              <i class="fa-solid fa-receipt"></i>
            </button>
            <button class="btn btn-outline-light btn-sm" onclick="app.openPlayerModal('${p.id}')">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      `;
    });
    cardsContainer.innerHTML = gridHtml;
  }

  function getFeeBadge(status) {
    if (status === 'PAID') {
      return `<span class="status-pill status-paid"><i class="fa-solid fa-check"></i> Paid (Rs. 500)</span>`;
    } else if (status === 'UNPAID') {
      return `<span class="status-pill status-unpaid"><i class="fa-solid fa-clock"></i> Unpaid</span>`;
    } else {
      return `<span class="status-pill status-pending"><i class="fa-solid fa-hourglass-half"></i> Pending Verif.</span>`;
    }
  }

  // ==================== PENDING REGISTRATIONS QUEUE ====================
  function renderPendingQueue() {
    const queue = state.pendingRegistrations || [];
    const container = document.getElementById('pendingApprovalsContainer');
    const listEl = document.getElementById('pendingQueueList');
    const countEl = document.getElementById('pendingQueueCount');

    if (!container || !listEl) return;

    if (queue.length === 0) {
      container.classList.add('hidden');
      return;
    }

    container.classList.remove('hidden');
    countEl.textContent = queue.length;

    let html = '';
    queue.forEach(item => {
      html += `
        <div class="queue-item">
          <div class="queue-item-info">
            <strong>${escapeHtml(item.name)}</strong>
            <span>Pos: <b>${item.position}</b> • WhatsApp: <b>${escapeHtml(item.phone)}</b> • Method: <b>${escapeHtml(item.paymentMethod)}</b> • Ref: <code style="color:var(--accent-gold-light);">${escapeHtml(item.trxId || 'N/A')}</code></span>
          </div>
          <div class="queue-actions">
            <button class="btn btn-whatsapp btn-xs" onclick="app.approveRegistration('${item.id}')">
              <i class="fa-solid fa-check"></i> Approve & Add to Squad
            </button>
            <button class="btn btn-outline-danger btn-xs" onclick="app.rejectRegistration('${item.id}')">
              <i class="fa-solid fa-xmark"></i> Reject
            </button>
          </div>
        </div>
      `;
    });
    listEl.innerHTML = html;
  }

  // ==================== TACTICAL PITCH & LINEUP ====================
  function renderPitch() {
    const formation = state.lineup.formation || '4-3-3';
    document.getElementById('lineupFormationSelect').value = formation;
    document.getElementById('pitchFormationLabel').textContent = formation;

    const schema = FORMATION_SCHEMAS[formation] || FORMATION_SCHEMAS['4-3-3'];
    const pitchLayer = document.getElementById('pitchPositionsLayer');
    if (!pitchLayer) return;

    let html = '';
    schema.forEach(rowDef => {
      html += `<div class="pitch-row">`;
      rowDef.slots.forEach(slot => {
        const assignedPlayerId = state.lineup.assigned ? state.lineup.assigned[slot.id] : null;
        const player = assignedPlayerId ? state.players.find(p => p.id === assignedPlayerId) : null;

        const displayName = player ? player.name : `+ ${slot.label}`;
        const displayJersey = player ? (player.jersey || '•') : slot.label;
        const isGk = slot.isGk ? 'gk-token' : '';

        html += `
          <div class="pitch-player-slot" onclick="app.handleSlotClick('${slot.id}', '${slot.label}')" title="Click to assign player to ${slot.label}">
            <div class="slot-token ${isGk}">${displayJersey}</div>
            <div class="slot-name">${escapeHtml(displayName)}</div>
            <span class="slot-pos-label">${slot.label}</span>
          </div>
        `;
      });
      html += `</div>`;
    });
    pitchLayer.innerHTML = html;

    // Render Bench
    const benchContainer = document.getElementById('pitchBenchList');
    if (benchContainer) {
      const benchIds = state.lineup.bench || [];
      const benchPlayers = benchIds.map(id => state.players.find(p => p.id === id)).filter(Boolean);

      if (benchPlayers.length === 0) {
        benchContainer.innerHTML = `<span style="font-size:0.75rem; color:var(--text-dim);">No substitutes selected yet</span>`;
      } else {
        benchContainer.innerHTML = benchPlayers.map(p => `
          <div class="bench-chip">
            <span class="jersey-badge" style="width:20px; height:20px; font-size:0.65rem;">${p.jersey || '#'}</span>
            <span>${escapeHtml(p.name)} (${p.position})</span>
            <i class="fa-solid fa-xmark" style="cursor:pointer; color:var(--danger); margin-left:4px;" onclick="app.removeBenchPlayer('${p.id}')"></i>
          </div>
        `).join('');
      }
    }

    renderRosterSquadList();
  }

  function renderRosterSquadList(search = '') {
    const rosterList = document.getElementById('lineupSquadSelectorList');
    if (!rosterList) return;

    const assignedIds = Object.values(state.lineup.assigned || {});
    const benchIds = state.lineup.bench || [];

    const players = state.players.filter(p => {
      return !search || p.name.toLowerCase().includes(search) || p.position.toLowerCase().includes(search);
    });

    let html = '';
    players.forEach(p => {
      const isStarting = assignedIds.includes(p.id);
      const isBenched = benchIds.includes(p.id);

      let statusBadge = '';
      if (isStarting) {
        statusBadge = `<span class="status-pill status-paid" style="font-size:0.65rem;">Starting 11</span>`;
      } else if (isBenched) {
        statusBadge = `<span class="status-pill status-pending" style="font-size:0.65rem;">Sub Bench</span>`;
      }

      html += `
        <div class="roster-item ${isStarting ? 'assigned' : ''}">
          <div class="roster-item-left">
            <span class="jersey-badge" style="width:26px; height:26px; font-size:0.75rem;">${p.jersey || '-'}</span>
            <div>
              <strong style="font-size:0.83rem; color:#fff; display:block;">${escapeHtml(p.name)}</strong>
              <span class="pos-badge pos-${p.position}" style="font-size:0.65rem; padding:1px 5px;">${p.position}</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            ${statusBadge}
            <button class="btn btn-outline-light btn-xs" onclick="app.assignPlayerToActiveSlot('${p.id}')" title="Assign to selected position">
              <i class="fa-solid fa-plus"></i> Select
            </button>
            <button class="btn btn-outline-warning btn-xs" onclick="app.toggleBenchPlayer('${p.id}')" title="Toggle Bench Substitute">
              <i class="fa-solid fa-chair"></i>
            </button>
          </div>
        </div>
      `;
    });
    rosterList.innerHTML = html;
  }

  function handleSlotClick(slotId, slotLabel) {
    activeSlotToAssign = slotId;
    showToast(`Click any player from the right squad list to place into position: ${slotLabel}`, 'info');
  }

  function assignPlayerToActiveSlot(playerId) {
    if (!activeSlotToAssign) {
      // If no slot explicitly clicked, assign to first empty slot
      const schema = FORMATION_SCHEMAS[state.lineup.formation] || FORMATION_SCHEMAS['4-3-3'];
      let foundEmpty = null;
      for (const row of schema) {
        for (const s of row.slots) {
          if (!state.lineup.assigned[s.id]) {
            foundEmpty = s.id;
            break;
          }
        }
        if (foundEmpty) break;
      }
      activeSlotToAssign = foundEmpty || 'ST';
    }

    if (!state.lineup.assigned) state.lineup.assigned = {};
    state.lineup.assigned[activeSlotToAssign] = playerId;

    // Remove from bench if was on bench
    if (state.lineup.bench) {
      state.lineup.bench = state.lineup.bench.filter(id => id !== playerId);
    }

    saveState();
    renderPitch();

    const player = state.players.find(p => p.id === playerId);
    showToast(`Assigned ${player?.name} to position [${activeSlotToAssign}]`, 'success');
  }

  function toggleBenchPlayer(playerId) {
    if (!state.lineup.bench) state.lineup.bench = [];

    // Remove from starting XI if there
    for (const slotKey in state.lineup.assigned) {
      if (state.lineup.assigned[slotKey] === playerId) {
        delete state.lineup.assigned[slotKey];
      }
    }

    if (state.lineup.bench.includes(playerId)) {
      state.lineup.bench = state.lineup.bench.filter(id => id !== playerId);
      showToast('Removed player from substitutes bench', 'warning');
    } else {
      state.lineup.bench.push(playerId);
      showToast('Added player to substitutes bench', 'success');
    }

    saveState();
    renderPitch();
  }

  function removeBenchPlayer(playerId) {
    if (state.lineup.bench) {
      state.lineup.bench = state.lineup.bench.filter(id => id !== playerId);
      saveState();
      renderPitch();
    }
  }

  function resetLineup() {
    if (confirm('Are you sure you want to clear the tactical lineup and bench?')) {
      state.lineup.assigned = {};
      state.lineup.bench = [];
      saveState();
      renderPitch();
      showToast('Lineup reset to empty', 'warning');
    }
  }

  // ==================== FEE & PAYMENT MANAGEMENT ====================
  function renderFeeTable() {
    const list = state.players.filter(p => {
      const matchesSearch = !feeFilters.search || p.name.toLowerCase().includes(feeFilters.search) || p.phone.includes(feeFilters.search);
      const matchesStatus = feeFilters.status === 'ALL' || p.feeStatus === feeFilters.status;
      return matchesSearch && matchesStatus;
    });

    const body = document.getElementById('feeTableBody');
    if (!body) return;

    const defaultFee = state.club.defaultFee || 500;
    const paidCount = state.players.filter(p => p.feeStatus === 'PAID').length;
    const pendingCount = state.players.filter(p => p.feeStatus !== 'PAID').length;
    const collected = paidCount * defaultFee;
    const pendingDues = pendingCount * defaultFee;
    const rate = state.players.length > 0 ? Math.round((paidCount / state.players.length) * 100) : 0;

    document.getElementById('feesStatsCollected').textContent = `Rs. ${collected.toLocaleString()}`;
    document.getElementById('feesStatsPending').textContent = `Rs. ${pendingDues.toLocaleString()}`;
    document.getElementById('feesStatsPercentage').textContent = `${rate}%`;
    document.getElementById('currentFeeMonthLabel').textContent = state.currentMonth || 'October 2026';

    let html = '';
    list.forEach(p => {
      const feeBadge = getFeeBadge(p.feeStatus);
      const isPaid = p.feeStatus === 'PAID';

      html += `
        <tr>
          <td>
            <div class="player-name-cell">
              <span class="jersey-badge">${p.jersey || '#'}</span>
              <div class="player-names">
                <span class="p-name">${escapeHtml(p.name)}</span>
                <span class="p-sub">${p.position} • S/O ${escapeHtml(p.fatherName || 'Chattal')}</span>
              </div>
            </div>
          </td>
          <td>
            <a href="https://wa.me/${cleanPhone(p.phone)}" target="_blank" class="btn-link">
              <i class="fa-brands fa-whatsapp text-whatsapp"></i> ${escapeHtml(p.phone)}
            </a>
          </td>
          <td><strong>Rs. ${defaultFee}</strong></td>
          <td>${feeBadge}</td>
          <td>${p.paymentMethod ? `<span class="acc-badge ${getPaymentBadgeClass(p.paymentMethod)}">${escapeHtml(p.paymentMethod)}</span>` : '<span style="color:var(--text-dim);">-</span>'}</td>
          <td><code style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(p.trxId || '-')}</code></td>
          <td><span style="font-size:0.75rem; color:var(--text-muted);">${p.datePaid || '-'}</span></td>
          <td>
            <div class="table-actions">
              ${!isPaid ? `
                <button class="btn btn-whatsapp btn-xs" onclick="app.sendPlayerFeeReminder('${p.id}')" title="Send WhatsApp Reminder">
                  <i class="fa-brands fa-whatsapp"></i> Remind
                </button>
              ` : ''}
              <button class="btn btn-outline-light btn-xs" onclick="app.openPaymentModal('${p.id}')">
                <i class="fa-solid fa-pen-to-square"></i> Record Fee
              </button>
              <button class="btn btn-outline-${isPaid ? 'danger' : 'primary'} btn-xs" onclick="app.toggleFeeQuick('${p.id}')">
                ${isPaid ? '<i class="fa-solid fa-xmark"></i> Unpay' : '<i class="fa-solid fa-check"></i> Mark Paid'}
              </button>
            </div>
          </td>
        </tr>
      `;
    });
    body.innerHTML = html;
  }

  function getPaymentBadgeClass(method) {
    if (method === 'JazzCash') return 'acc-jc';
    if (method === 'EasyPaisa') return 'acc-ep';
    if (method === 'Bank') return 'acc-bank';
    return 'role-tag';
  }

  function toggleFeeQuick(playerId) {
    const player = state.players.find(p => p.id === playerId);
    if (!player) return;

    if (player.feeStatus === 'PAID') {
      player.feeStatus = 'UNPAID';
      player.paymentMethod = '';
      player.trxId = '';
      player.datePaid = '';
      showToast(`Marked ${player.name} as Unpaid`, 'warning');
    } else {
      player.feeStatus = 'PAID';
      player.paymentMethod = 'Cash';
      player.trxId = 'Quick Ground Record';
      player.datePaid = new Date().toISOString().split('T')[0];
      showToast(`Marked ${player.name} as Paid (Rs. ${state.club.defaultFee})`, 'success');
    }

    saveState();
    renderDashboard();
    renderPlayersList();
    renderFeeTable();
  }

  // ==================== WHATSAPP BROADCAST ENGINE ====================
  function setWaTemplate(type) {
    activeWaTemplate = type;
    document.querySelectorAll('.wa-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-type') === type);
    });

    // Toggle Form Field Panels
    document.getElementById('waMatchFields')?.classList.toggle('hidden', type !== 'match');
    document.getElementById('waFeesFields')?.classList.toggle('hidden', type !== 'fees');
    document.getElementById('waGeneralFields')?.classList.toggle('hidden', type !== 'practice' && type !== 'meeting');
    document.getElementById('waResultFields')?.classList.toggle('hidden', type !== 'result');
    document.getElementById('waCustomFields')?.classList.toggle('hidden', type !== 'custom');

    // Pre-populate if general
    if (type === 'meeting') {
      const title = document.getElementById('waGeneralTitle');
      if (title) title.value = 'Important Club & Tournament Meeting';
      const desc = document.getElementById('waGeneralDesc');
      if (desc) desc.value = 'All registered players and management are requested to attend. We will discuss upcoming village tournament matches and jersey distributions.';
    } else if (type === 'practice') {
      const title = document.getElementById('waGeneralTitle');
      if (title) title.value = 'Evening Practice & Fitness Session';
    }

    updateWaLivePreview();
  }

  function generateWaMessageText() {
    const club = state.club.name || 'Chattal Football Club';
    const jc = state.paymentAccounts.jazzcash;
    const ep = state.paymentAccounts.easypaisa;
    const fee = state.club.defaultFee || 500;

    if (activeWaTemplate === 'match') {
      const matchType = document.getElementById('waMatchType')?.value || 'HOME';
      const opp = document.getElementById('waOpponentName')?.value || 'Opponent FC';
      const date = document.getElementById('waMatchDate')?.value || 'Sunday';
      const time = document.getElementById('waMatchTime')?.value || '16:30';
      const repTime = document.getElementById('waReportingTime')?.value || '15:45';
      const venue = document.getElementById('waVenue')?.value || state.club.homeGround;
      const kit = document.getElementById('waKitColor')?.value || 'Emerald Green';
      const includeSquad = document.getElementById('waIncludeSquadCheckbox')?.checked;
      const notes = document.getElementById('waMatchNotes')?.value;

      let typeEmoji = matchType === 'HOME' ? '🏟️ HOME MATCH ALERT' : '🚌 AWAY MATCH ALERT';
      if (matchType === 'TOURNAMENT') typeEmoji = '🏆 TOURNAMENT FIXTURE ALERT';

      let text = `⚽ *${club.toUpperCase()}* ⚽\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `${typeEmoji}\n`;
      text += `⚔️ *${state.club.shortName} vs ${opp}*\n\n`;
      text += `📅 *Date:* ${formatDate(date)}\n`;
      text += `⏰ *Kick-off Time:* ${time}\n`;
      text += `📍 *Venue / Ground:* ${venue}\n`;
      text += `⏱️ *Reporting Time:* ${repTime} (Sharp)\n`;
      text += `👕 *Kit Color:* ${kit}\n`;

      if (notes) {
        text += `\n📌 *Instructions:* ${notes}\n`;
      }

      if (includeSquad) {
        text += `\n📋 *SELECTED MATCHDAY SQUAD:*\n`;
        const starters = Object.values(state.lineup.assigned || {}).map(id => state.players.find(p => p.id === id)).filter(Boolean);
        if (starters.length > 0) {
          starters.forEach((p, i) => {
            text += `${i + 1}. ${p.name} (#${p.jersey || '-'} ${p.position})\n`;
          });
        } else {
          state.players.slice(0, 11).forEach((p, i) => {
            text += `${i + 1}. ${p.name} (#${p.jersey || '-'} ${p.position})\n`;
          });
        }
      }

      text += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `🔥 _Come on Chattal Boys! Let's win this together!_`;
      return text;
    }

    if (activeWaTemplate === 'fees') {
      const month = document.getElementById('waFeeMonth')?.value || state.currentMonth;
      const note = document.getElementById('waFeeNote')?.value || '';
      const includeAccounts = document.getElementById('waIncludeAccountDetails')?.checked;

      const unpaidPlayers = state.players.filter(p => p.feeStatus !== 'PAID');

      let text = `📢 *${club.toUpperCase()} — MONTHLY FEE NOTICE* 📢\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `🗓️ *Month:* ${month}\n`;
      text += `💵 *Monthly Due:* Rs. ${fee} / Player\n\n`;

      if (note) {
        text += `💬 ${note}\n\n`;
      }

      text += `📋 *PENDING DUES LIST (${unpaidPlayers.length} Players):*\n`;
      if (unpaidPlayers.length > 0) {
        unpaidPlayers.forEach((p, i) => {
          text += `${i + 1}. ${p.name} (Rs. ${fee})\n`;
        });
      } else {
        text += `🎉 *All players have cleared their dues! Thank you!*\n`;
      }

      if (includeAccounts) {
        text += `\n💳 *HOW TO PAY ONLINE:*\n`;
        text += `⚡ *JazzCash:* ${jc.number} (${jc.title})\n`;
        text += `📱 *EasyPaisa:* ${ep.number} (${ep.title})\n`;
        text += `🏛️ *Bank (HBL):* ${state.paymentAccounts.bank.iban}\n`;
        text += `\n_After sending fee, please message your TID / screenshot to Club Admin._\n`;
      }

      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `🤝 _Your timely contribution keeps our club running!_`;
      return text;
    }

    if (activeWaTemplate === 'practice' || activeWaTemplate === 'meeting') {
      const title = document.getElementById('waGeneralTitle')?.value || 'Notice';
      const dateTime = document.getElementById('waGeneralDateTime')?.value || 'Tomorrow';
      const venue = document.getElementById('waGeneralVenue')?.value || state.club.homeGround;
      const desc = document.getElementById('waGeneralDesc')?.value || '';

      let text = `📢 *${club.toUpperCase()}* 📢\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `📌 *ANNOUNCEMENT: ${title.toUpperCase()}*\n\n`;
      text += `🗓️ *When:* ${dateTime}\n`;
      text += `📍 *Where:* ${venue}\n\n`;
      text += `📝 *Agenda & Details:*\n${desc}\n\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `⚠️ *Note:* Attendance is mandatory for all registered players.`;
      return text;
    }

    if (activeWaTemplate === 'result') {
      const our = document.getElementById('waResultOurGoals')?.value || '0';
      const opp = document.getElementById('waResultOppGoals')?.value || '0';
      const oppName = document.getElementById('waResultOppName')?.value || 'Opponent FC';
      const scorers = document.getElementById('waResultScorers')?.value || '';
      const motm = document.getElementById('waResultMotm')?.value || '';

      let text = `🏆 *FULL TIME MATCH RESULT* 🏆\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `⚽ *${state.club.shortName} [ ${our} - ${opp} ] ${oppName}*\n\n`;
      if (scorers) text += `🎯 *Goal Scorers:* ${scorers}\n`;
      if (motm) text += `⭐ *Man of the Match:* ${motm}\n\n`;
      text += `👏 Thank you to both teams and our wonderful village supporters!\n`;
      text += `━━━━━━━━━━━━━━━━━━━━━\n`;
      text += `💚 *#ChattalFC #PrideOfChattal*`;
      return text;
    }

    if (activeWaTemplate === 'custom') {
      const custom = document.getElementById('waCustomText')?.value || '';
      return custom || `📢 *${club} Announcement*\n\nPlease write your custom message in the box on the left.`;
    }

    return '';
  }

  function updateWaLivePreview() {
    const text = generateWaMessageText();
    const previewEl = document.getElementById('waLiveMessagePreview');
    if (previewEl) {
      previewEl.textContent = text;
    }
  }

  function sendWhatsappDirect() {
    const text = generateWaMessageText();
    const encoded = encodeURIComponent(text);
    const waUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(waUrl, '_blank');
    showToast('Opening WhatsApp Broadcast...', 'whatsapp');
  }

  function copyWhatsappText() {
    const text = generateWaMessageText();
    navigator.clipboard.writeText(text).then(() => {
      showToast('WhatsApp announcement copied to clipboard!', 'success');
    }).catch(() => {
      showToast('Could not copy automatically. Please copy manually.', 'warning');
    });
  }

  function sendPlayerFeeReminder(playerId) {
    const player = state.players.find(p => p.id === playerId);
    if (!player) return;

    const jc = state.paymentAccounts.jazzcash;
    const ep = state.paymentAccounts.easypaisa;
    const fee = state.club.defaultFee || 500;
    const month = state.currentMonth || 'October 2026';

    const msg = `Salam ${player.name} bhai! ⚽\n\nThis is a gentle reminder regarding your monthly membership fee for *${state.club.name}* (${month}).\n\n💵 *Amount Due:* Rs. ${fee}\n\n⚡ *JazzCash:* ${jc.number} (${jc.title})\n📱 *EasyPaisa:* ${ep.number} (${ep.title})\n\nPlease send the fee at your earliest convenience and reply with your TID / confirmation. Thank you! 🤝\n— *Chattal FC Management*`;

    const encoded = encodeURIComponent(msg);
    const phone = cleanPhone(player.phone);
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    window.open(url, '_blank');
    showToast(`Opening WhatsApp chat with ${player.name}...`, 'whatsapp');
  }

  // ==================== FLYER & POSTER STUDIO ====================
  function updateFlyerDesign() {
    const theme = document.getElementById('flyerThemeSelect')?.value || 'emerald-gold';
    const sub = document.getElementById('flyerSubheading')?.value || 'VILLAGE SUPER DERBY';
    const opp = document.getElementById('flyerOpponentName')?.value || 'TARING FC';
    const dt = document.getElementById('flyerDateTime')?.value || 'Sunday • 4:30 PM';
    const ground = document.getElementById('flyerGround')?.value || state.club.homeGround;
    const tag = document.getElementById('flyerTagline')?.value || 'COME SUPPORT OUR BOYS!';

    const flyer = document.getElementById('flyerVisualContainer');
    if (!flyer) return;

    flyer.className = `match-flyer-poster theme-${theme}`;
    document.getElementById('flyerPosterSubheading').textContent = sub;
    document.getElementById('flyerHomeName').textContent = state.club.shortName.toUpperCase();
    document.getElementById('flyerAwayName').textContent = opp.toUpperCase();
    document.getElementById('flyerAwayInitials').textContent = opp.slice(0, 3).toUpperCase();
    document.getElementById('flyerDispDateTime').textContent = dt;
    document.getElementById('flyerDispGround').textContent = ground;
    document.getElementById('flyerDispTagline').textContent = tag;

    // Squad List Preview
    const starters = Object.values(state.lineup.assigned || {}).map(id => state.players.find(p => p.id === id)).filter(Boolean);
    const squadNames = starters.length > 0 ? starters.map(p => `${p.name} (#${p.jersey || '-'})`).join(' • ') : state.players.slice(0, 11).map(p => p.name).join(' • ');
    document.getElementById('flyerSquadListNames').textContent = squadNames;
  }

  function downloadFlyerPNG() {
    const el = document.getElementById('flyerVisualContainer');
    if (!el || typeof html2canvas === 'undefined') {
      showToast('Rendering engine unavailable. You can take a screenshot!', 'warning');
      return;
    }

    showToast('Generating high-resolution poster image...', 'info');

    html2canvas(el, {
      scale: 3,
      useCORS: true,
      backgroundColor: null
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `Chattal-FC-Matchday-Poster-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Matchday Poster downloaded successfully!', 'success');
    }).catch(err => {
      console.error(err);
      showToast('Error exporting flyer image.', 'error');
    });
  }

  function downloadPitchImage() {
    const el = document.getElementById('pitchBoardExport');
    if (!el || typeof html2canvas === 'undefined') {
      showToast('Screenshot tool unavailable', 'warning');
      return;
    }

    showToast('Rendering Tactical Pitch image...', 'info');

    html2canvas(el, {
      scale: 2,
      useCORS: true
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `Chattal-FC-Lineup-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('Pitch lineup graphic downloaded!', 'success');
    }).catch(err => {
      console.error(err);
      showToast('Error exporting lineup.', 'error');
    });
  }

  function shareLineupToWhatsapp() {
    const starters = Object.values(state.lineup.assigned || {}).map(id => state.players.find(p => p.id === id)).filter(Boolean);
    const bench = (state.lineup.bench || []).map(id => state.players.find(p => p.id === id)).filter(Boolean);

    let text = `📋 *${state.club.name.toUpperCase()} — MATCH LINEUP* 📋\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `⚔️ *Match:* ${state.lineup.matchName || 'Upcoming Fixture'}\n`;
    text += `🛡️ *Formation:* ${state.lineup.formation || '4-3-3'}\n\n`;

    text += `⚽ *STARTING SQUAD:*\n`;
    if (starters.length > 0) {
      starters.forEach((p, idx) => {
        text += `${idx + 1}. ${p.name} (#${p.jersey || '-'} ${p.position})\n`;
      });
    } else {
      text += `_Lineup being finalized by Coach._\n`;
    }

    if (bench.length > 0) {
      text += `\n🪑 *SUBSTITUTES BENCH:*\n`;
      bench.forEach((p, idx) => {
        text += `${idx + 1}. ${p.name} (#${p.jersey || '-'} ${p.position})\n`;
      });
    }

    text += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `🔥 _Let's give 100% on the pitch today!_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
    showToast('Sharing Tactical Lineup to WhatsApp...', 'whatsapp');
  }

  // ==================== PUBLIC REGISTRATION PORTAL ====================
  function handlePublicRegistration(e) {
    e.preventDefault();

    const name = document.getElementById('regPlayerName').value.trim();
    const fatherName = document.getElementById('regFatherName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const position = document.getElementById('regPosition').value;
    const jersey = parseInt(document.getElementById('regJerseyNumber').value) || null;
    const foot = document.getElementById('regFoot').value;
    const paymentMethod = document.getElementById('regPaymentMethod').value;
    const trxId = document.getElementById('regTrxId').value.trim();

    if (!name || !phone || !position) {
      showToast('Please fill out all required fields marked with *', 'error');
      return;
    }

    const newEntry = {
      id: 'pr-' + Date.now(),
      name,
      fatherName,
      phone,
      position,
      jersey,
      foot,
      paymentMethod,
      trxId: trxId || 'Pending Verification',
      submittedAt: new Date().toLocaleString()
    };

    if (!state.pendingRegistrations) state.pendingRegistrations = [];
    state.pendingRegistrations.push(newEntry);
    saveState();

    document.getElementById('publicRegistrationForm').reset();
    renderPendingQueue();
    renderDashboard();

    showToast('Registration submitted successfully! Admin will verify and add you to squad.', 'success');
  }

  function approveRegistration(pendingId) {
    const item = state.pendingRegistrations.find(pr => pr.id === pendingId);
    if (!item) return;

    const newPlayer = {
      id: 'p-' + Date.now(),
      name: item.name,
      fatherName: item.fatherName || '',
      phone: item.phone,
      position: item.position,
      jersey: item.jersey || (state.players.length + 1),
      role: 'Player',
      status: 'Active',
      feeStatus: item.trxId && item.trxId !== 'Pending Verification' ? 'PAID' : 'PENDING',
      paymentMethod: item.paymentMethod,
      trxId: item.trxId,
      datePaid: new Date().toISOString().split('T')[0],
      joinedDate: new Date().toISOString().split('T')[0]
    };

    state.players.push(newPlayer);
    state.pendingRegistrations = state.pendingRegistrations.filter(pr => pr.id !== pendingId);
    saveState();

    renderAll();
    showToast(`Approved ${newPlayer.name}! Added to Chattal FC Squad.`, 'success');
  }

  function rejectRegistration(pendingId) {
    if (confirm('Are you sure you want to reject this registration entry?')) {
      state.pendingRegistrations = state.pendingRegistrations.filter(pr => pr.id !== pendingId);
      saveState();
      renderPendingQueue();
      renderDashboard();
      showToast('Registration entry rejected.', 'warning');
    }
  }

  // ==================== PLAYER MODAL & CRUD ====================
  function openPlayerModal(playerId = null) {
    const modal = document.getElementById('playerModal');
    const form = document.getElementById('playerForm');
    form.reset();

    if (playerId) {
      const p = state.players.find(x => x.id === playerId);
      if (p) {
        document.getElementById('playerModalTitle').innerHTML = `<i class="fa-solid fa-user-pen"></i> Edit Player: ${escapeHtml(p.name)}`;
        document.getElementById('modalPlayerId').value = p.id;
        document.getElementById('modalPlayerName').value = p.name;
        document.getElementById('modalPlayerPhone').value = p.phone;
        document.getElementById('modalPlayerPosition').value = p.position;
        document.getElementById('modalPlayerJersey').value = p.jersey || '';
        document.getElementById('modalPlayerRole').value = p.role;
        document.getElementById('modalPlayerStatus').value = p.status;
        document.getElementById('modalPlayerFeeStatus').value = p.feeStatus;
        document.getElementById('modalPlayerTrx').value = p.trxId || '';
      }
    } else {
      document.getElementById('playerModalTitle').innerHTML = `<i class="fa-solid fa-user-plus"></i> Add New Player`;
      document.getElementById('modalPlayerId').value = '';
    }

    modal.classList.add('active');
  }

  function handleSavePlayer(e) {
    e.preventDefault();
    const id = document.getElementById('modalPlayerId').value;
    const name = document.getElementById('modalPlayerName').value.trim();
    const phone = document.getElementById('modalPlayerPhone').value.trim();
    const position = document.getElementById('modalPlayerPosition').value;
    const jersey = parseInt(document.getElementById('modalPlayerJersey').value) || null;
    const role = document.getElementById('modalPlayerRole').value;
    const status = document.getElementById('modalPlayerStatus').value;
    const feeStatus = document.getElementById('modalPlayerFeeStatus').value;
    const trxId = document.getElementById('modalPlayerTrx').value.trim();

    if (!name || !phone) {
      showToast('Name and Phone are required.', 'error');
      return;
    }

    if (id) {
      // Edit existing
      const p = state.players.find(x => x.id === id);
      if (p) {
        p.name = name;
        p.phone = phone;
        p.position = position;
        p.jersey = jersey;
        p.role = role;
        p.status = status;
        p.feeStatus = feeStatus;
        p.trxId = trxId;
        showToast(`Updated player ${name}`, 'success');
      }
    } else {
      // Create new
      const newP = {
        id: 'p-' + Date.now(),
        name,
        fatherName: '',
        phone,
        position,
        jersey: jersey || (state.players.length + 1),
        role,
        status,
        feeStatus,
        paymentMethod: feeStatus === 'PAID' ? 'Cash' : '',
        trxId,
        datePaid: feeStatus === 'PAID' ? new Date().toISOString().split('T')[0] : '',
        joinedDate: new Date().toISOString().split('T')[0]
      };
      state.players.push(newP);
      showToast(`Added new player ${name} to Chattal FC`, 'success');
    }

    saveState();
    closeModal('playerModal');
    renderAll();
  }

  function deletePlayer(playerId) {
    const p = state.players.find(x => x.id === playerId);
    if (!p) return;

    if (confirm(`Are you sure you want to delete "${p.name}" from Chattal FC records?`)) {
      state.players = state.players.filter(x => x.id !== playerId);
      // Clean from lineup
      if (state.lineup.assigned) {
        for (const k in state.lineup.assigned) {
          if (state.lineup.assigned[k] === playerId) delete state.lineup.assigned[k];
        }
      }
      if (state.lineup.bench) {
        state.lineup.bench = state.lineup.bench.filter(id => id !== playerId);
      }

      saveState();
      renderAll();
      showToast(`Deleted ${p.name}`, 'warning');
    }
  }

  // ==================== PAYMENT MODAL ====================
  function openPaymentModal(playerId) {
    const p = state.players.find(x => x.id === playerId);
    if (!p) return;

    document.getElementById('payModalPlayerId').value = p.id;
    document.getElementById('payModalPlayerSummary').innerHTML = `
      <strong>${escapeHtml(p.name)}</strong> (${p.position} #${p.jersey || '-'})
      <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">WhatsApp: ${p.phone} • Current Status: <b>${p.feeStatus}</b></div>
    `;
    document.getElementById('payModalMonth').value = state.currentMonth || 'October 2026';
    document.getElementById('payModalAmount').value = state.club.defaultFee || 500;
    document.getElementById('payModalMethod').value = p.paymentMethod || 'JazzCash';
    document.getElementById('payModalStatus').value = p.feeStatus || 'PAID';
    document.getElementById('payModalTrxId').value = p.trxId || '';

    document.getElementById('paymentModal').classList.add('active');
  }

  function handleSavePaymentRecord(e) {
    e.preventDefault();
    const id = document.getElementById('payModalPlayerId').value;
    const p = state.players.find(x => x.id === id);
    if (!p) return;

    p.paymentMethod = document.getElementById('payModalMethod').value;
    p.feeStatus = document.getElementById('payModalStatus').value;
    p.trxId = document.getElementById('payModalTrxId').value.trim();
    if (p.feeStatus === 'PAID' && !p.datePaid) {
      p.datePaid = new Date().toISOString().split('T')[0];
    }

    saveState();
    closeModal('paymentModal');
    renderAll();
    showToast(`Payment recorded for ${p.name}!`, 'success');
  }

  function closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('active');
  }

  // ==================== SETTINGS & DATA TOOLS ====================
  function populateSettingsForm() {
    document.getElementById('setClubName').value = state.club.name;
    document.getElementById('setClubMotto').value = state.club.motto;
    document.getElementById('setHomeGround').value = state.club.homeGround;
    document.getElementById('setDefaultFeeAmount').value = state.club.defaultFee || 500;
    document.getElementById('setWhatsappGroupName').value = state.club.whatsappGroup || '';

    document.getElementById('setJcTitle').value = state.paymentAccounts.jazzcash.title;
    document.getElementById('setJcNumber').value = state.paymentAccounts.jazzcash.number;
    document.getElementById('setEpTitle').value = state.paymentAccounts.easypaisa.title;
    document.getElementById('setEpNumber').value = state.paymentAccounts.easypaisa.number;
    document.getElementById('setBankName').value = state.paymentAccounts.bank.name;
    document.getElementById('setBankTitle').value = state.paymentAccounts.bank.title;
    document.getElementById('setBankIban').value = state.paymentAccounts.bank.iban;
  }

  function saveClubProfileSettings() {
    state.club.name = document.getElementById('setClubName').value.trim() || 'Chattal FC';
    state.club.motto = document.getElementById('setClubMotto').value.trim();
    state.club.homeGround = document.getElementById('setHomeGround').value.trim();
    state.club.defaultFee = parseInt(document.getElementById('setDefaultFeeAmount').value) || 500;
    state.club.whatsappGroup = document.getElementById('setWhatsappGroupName').value.trim();

    saveState();
    renderAll();
    showToast('Club settings saved successfully!', 'success');
  }

  function savePaymentAccountSettings() {
    state.paymentAccounts.jazzcash.title = document.getElementById('setJcTitle').value.trim();
    state.paymentAccounts.jazzcash.number = document.getElementById('setJcNumber').value.trim();
    state.paymentAccounts.easypaisa.title = document.getElementById('setEpTitle').value.trim();
    state.paymentAccounts.easypaisa.number = document.getElementById('setEpNumber').value.trim();
    state.paymentAccounts.bank.name = document.getElementById('setBankName').value.trim();
    state.paymentAccounts.bank.title = document.getElementById('setBankTitle').value.trim();
    state.paymentAccounts.bank.iban = document.getElementById('setBankIban').value.trim();

    saveState();
    renderAll();
    showToast('Payment account credentials updated!', 'success');
  }

  function copyPaymentDetails(type) {
    let details = '';
    if (type === 'JazzCash') {
      details = `JazzCash Account: ${state.paymentAccounts.jazzcash.number} (${state.paymentAccounts.jazzcash.title})`;
    } else if (type === 'EasyPaisa') {
      details = `EasyPaisa Account: ${state.paymentAccounts.easypaisa.number} (${state.paymentAccounts.easypaisa.title})`;
    } else if (type === 'Bank') {
      details = `Bank: ${state.paymentAccounts.bank.name} | Title: ${state.paymentAccounts.bank.title} | IBAN: ${state.paymentAccounts.bank.iban}`;
    }

    navigator.clipboard.writeText(details).then(() => {
      showToast(`${type} details copied to clipboard!`, 'success');
    }).catch(() => {
      showToast(`Copy failed. ${details}`, 'warning');
    });
  }

  function exportBackupJSON() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `Chattal-FC-Backup-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Complete backup JSON downloaded!', 'success');
  }

  function importBackupJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.players && Array.isArray(imported.players)) {
          state = imported;
          saveState();
          renderAll();
          showToast('Club data restored successfully from backup!', 'success');
        } else {
          showToast('Invalid backup file structure.', 'error');
        }
      } catch (err) {
        showToast('Error reading JSON file.', 'error');
      }
    };
    reader.readAsText(file);
  }

  function loadSampleDataConfirm() {
    if (confirm('Load standard Chattal FC demonstration squad & records?')) {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      saveState();
      renderAll();
      showToast('Sample squad data loaded successfully!', 'success');
    }
  }

  function resetDataConfirm() {
    if (confirm('Are you sure you want to ERASE all club data? This cannot be undone unless you have a backup.')) {
      state = {
        club: DEFAULT_STATE.club,
        paymentAccounts: DEFAULT_STATE.paymentAccounts,
        currentMonth: 'October 2026',
        players: [],
        pendingRegistrations: [],
        nextMatch: DEFAULT_STATE.nextMatch,
        lineup: { formation: '4-3-3', assigned: {}, bench: [] }
      };
      saveState();
      renderAll();
      showToast('All data erased. System reset.', 'warning');
    }
  }

  function exportPlayersCSV() {
    let csv = 'Jersey,Player Name,Father Name,Phone,Position,Role,Status,Fee Status,Payment Method,Trx ID\n';
    state.players.forEach(p => {
      csv += `"${p.jersey || ''}","${p.name}","${p.fatherName || ''}","${p.phone}","${p.position}","${p.role}","${p.status}","${p.feeStatus}","${p.paymentMethod || ''}","${p.trxId || ''}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Chattal-FC-Squad-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast('Squad CSV exported!', 'success');
  }

  function exportFeeStatement() {
    window.print();
  }

  // ==================== TOAST & UTILITIES ====================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let icon = 'fa-check';
    if (type === 'error') icon = 'fa-circle-xmark';
    if (type === 'warning') icon = 'fa-triangle-exclamation';
    if (type === 'whatsapp') icon = 'fa-whatsapp';
    if (type === 'info') icon = 'fa-circle-info';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3500);
  }

  function cleanPhone(phone) {
    if (!phone) return '';
    let p = phone.replace(/[^0-9]/g, '');
    if (p.startsWith('0')) {
      p = '92' + p.substring(1);
    }
    return p;
  }

  function formatDate(dStr) {
    if (!dStr) return '';
    try {
      const d = new Date(dStr);
      if (isNaN(d.getTime())) return dStr;
      return d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    } catch {
      return dStr;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Expose API to window for inline HTML onclick handlers
  window.app = {
    switchTab,
    openPlayerModal,
    openPaymentModal,
    closeModal,
    handleSavePlayer,
    handleSavePaymentRecord,
    deletePlayer,
    toggleFeeQuick,
    sendPlayerFeeReminder,
    copyPaymentDetails,
    approveRegistration,
    rejectRegistration,
    handlePublicRegistration,
    handleSlotClick,
    assignPlayerToActiveSlot,
    toggleBenchPlayer,
    removeBenchPlayer,
    saveClubProfileSettings,
    savePaymentAccountSettings,
    exportBackupJSON,
    importBackupJSON,
    loadSampleDataConfirm,
    resetDataConfirm,
    openQuickBroadcastModal: (type) => { switchTab('whatsapp'); setWaTemplate(type); },
    openFeeConfigModal: () => { switchTab('settings'); }
  };

  // Launch on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
