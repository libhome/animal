// Comprehensive Mammal RDF Data Structure
const mammalRDFData = {
  nodes: [
    // Root Class
    { data: { id: 'mammalia', label: '포유류\n(Mammalia)', type: 'class', color: '#E91E63', info: '새끼를 낳아 젖을 먹여 기르는 척추동물이에요.' } },

    // Core Characteristics (Literals/Properties)
    { data: { id: 'feedsMilk', label: '젖을 먹임', type: 'property', info: '엄마의 젖으로 새끼를 키우는 가장 큰 특징이에요.' } },
    { data: { id: 'hasFur', label: '털이 있음', type: 'property', info: '대부분의 포유류는 몸을 보호하는 털이 있어요.' } },
    { data: { id: 'warmBlooded', label: '온혈 동물', type: 'property', info: '주변 온도가 변해도 체온을 일정하게 유지해요.' } },

    // Orders (Sub-classes)
    { data: { id: 'carnivora', label: '식육목\n(Carnivora)', type: 'subclass', info: '고기를 주로 먹는 동물의 무리에요.' } },
    { data: { id: 'cetacea', label: '고래목\n(Cetacea)', type: 'subclass', info: '바다에서 생활하도록 진화한 포유류예요.' } },
    { data: { id: 'primates', label: '영장목\n(Primates)', type: 'subclass', info: '지능이 높고 손을 잘 사용하는 무리에요.' } },
    { data: { id: 'proboscidea', label: '장코목\n(Proboscidea)', type: 'subclass', info: '코가 길게 변형된 코끼리 무리에요.' } },

    // Species (Instances)
    { data: { id: 'tiger', label: '호랑이', type: 'instance', emoji: '🐯', info: '식육목의 대표적인 육식 동물이에요.' } },
    { data: { id: 'lion', label: '사자', type: 'instance', emoji: '🦁', info: '초원의 왕이라 불리는 용맹한 동물이에요.' } },
    { data: { id: 'dolphin', label: '돌고래', type: 'instance', emoji: '🐬', info: '지능이 매우 높고 초음파로 소통해요.' } },
    { data: { id: 'whale', label: '고래', type: 'instance', emoji: '🐳', info: '지구상에서 가장 큰 동물인 대왕고래가 속해있어요.' } },
    { data: { id: 'chimp', label: '침팬지', type: 'instance', emoji: '🐒', info: '사람과 유전적으로 가장 가까운 친구예요.' } },
    { data: { id: 'human', label: '사람', type: 'instance', emoji: '🙋', info: '도구를 사용하고 문화를 만드는 생각하는 존재예요.' } },
    { data: { id: 'elephant', label: '코끼리', type: 'instance', emoji: '🐘', info: '코가 손처럼 자유롭고 기억력이 아주 좋아요.' } },

    // Note for help
    { data: { id: 'note_drag', label: '"드래그해서\\n구조를 살펴봐!"', type: 'note' } }
  ],
  edges: [
    // Subclass relations
    { data: { source: 'carnivora', target: 'mammalia', label: 'subClassOf' } },
    { data: { source: 'cetacea', target: 'mammalia', label: 'subClassOf' } },
    { data: { source: 'primates', target: 'mammalia', label: 'subClassOf' } },
    { data: { source: 'proboscidea', target: 'mammalia', label: 'subClassOf' } },

    // Property relations (rdfs:domain or characteristics)
    { data: { source: 'mammalia', target: 'feedsMilk', label: 'hasProperty' } },
    { data: { source: 'mammalia', target: 'hasFur', label: 'hasProperty' } },
    { data: { source: 'mammalia', target: 'warmBlooded', label: 'hasProperty' } },

    // Instance relations
    { data: { source: 'tiger', target: 'carnivora', label: 'type' } },
    { data: { source: 'lion', target: 'carnivora', label: 'type' } },
    { data: { source: 'dolphin', target: 'cetacea', label: 'type' } },
    { data: { source: 'whale', target: 'cetacea', label: 'type' } },
    { data: { source: 'chimp', target: 'primates', label: 'type' } },
    { data: { source: 'human', target: 'primates', label: 'type' } },
    { data: { source: 'elephant', target: 'proboscidea', label: 'type' } }
  ]
};

// Initialize Cytoscape
document.addEventListener('DOMContentLoaded', () => {
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: mammalRDFData,
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(label)',
          'text-valign': 'center',
          'text-halign': 'center',
          'padding': '10px',
          'font-size': '12px',
          'font-weight': 'bold',
          'text-wrap': 'wrap',
          'text-max-width': '80px',
          'background-color': '#fff',
          'border-width': 2,
          'border-color': '#ccc',
          'color': '#333'
        }
      },
      {
        selector: 'node[type="class"]',
        style: {
          'shape': 'ellipse',
          'width': '100px',
          'height': '100px',
          'background-color': '#FFCDD2',
          'border-color': '#B71C1C',
          'font-size': '16px',
          'border-width': 4
        }
      },
      {
        selector: 'node[type="subclass"]',
        style: {
          'shape': 'round-rectangle',
          'width': '90px',
          'height': '60px',
          'background-color': '#E1F5FE',
          'border-color': '#01579B'
        }
      },
      {
        selector: 'node[type="instance"]',
        style: {
          'shape': 'diamond',
          'width': '80px',
          'height': '80px',
          'background-color': '#FFF9C4',
          'border-color': '#FBC02D',
          'content': 'data(emoji)\\ndata(label)',
          'font-size': '11px',
          'text-margin-y': -5
        }
      },
      {
        selector: 'node[type="property"]',
        style: {
          'shape': 'hexagon',
          'width': '70px',
          'height': '70px',
          'background-color': '#E8F5E9',
          'border-color': '#2E7D32',
          'font-style': 'italic'
        }
      },
      {
        selector: 'node[type="note"]',
        style: {
          'shape': 'round-tag',
          'background-color': '#f8f9fa',
          'border-color': '#6c757d',
          'border-style': 'dashed',
          'font-size': '10px',
          'color': '#6c757d'
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 2,
          'line-color': '#9e9e9e',
          'target-arrow-color': '#9e9e9e',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'label': 'data(label)',
          'font-size': '10px',
          'text-background-color': '#ffffff',
          'text-background-opacity': 1,
          'text-margin-y': -10
        }
      },
      {
        selector: 'edge[label="subClassOf"]',
        style: {
          'line-color': '#2196F3',
          'target-arrow-color': '#2196F3',
          'width': 3
        }
      },
      {
        selector: 'edge[label="hasProperty"]',
        style: {
          'line-style': 'dashed',
          'line-color': '#4CAF50',
          'target-arrow-color': '#4CAF50'
        }
      }
    ],
    layout: {
      name: 'cose',
      idealEdgeLength: 120,
      nodeRepulsion: 400000,
      animate: true,
      padding: 30
    }
  });


  // Vivid Interaction Logic
  cy.on('grab', 'node', function (evt) {
    const node = evt.target;
    node.animate({
      style: {
        'border-color': '#FF9800',
        'border-width': 6
      }
    }, { duration: 200 });
  });

  cy.on('free', 'node', function (evt) {
    const node = evt.target;
    // Return to original size based on type
    let originalBorder = '#ccc';
    let originalWidth = '80px';
    let originalHeight = '80px';
    let originalBorderWidth = 2;

    switch (node.data('type')) {
      case 'class':
        originalBorder = '#B71C1C';
        originalWidth = '100px';
        originalHeight = '100px';
        originalBorderWidth = 4;
        break;
      case 'subclass':
        originalBorder = '#01579B';
        originalWidth = '90px';
        originalHeight = '60px';
        break;
      case 'instance':
        originalBorder = '#FBC02D';
        originalWidth = '80px';
        originalHeight = '80px';
        break;
      case 'property':
        originalBorder = '#2E7D32';
        originalWidth = '70px';
        originalHeight = '70px';
        break;
    }

    node.animate({
      style: {
        'width': originalWidth,
        'height': originalHeight,
        'border-color': originalBorder,
        'border-width': originalBorderWidth
      }
    }, {
      duration: 500,
      easing: 'spring(500, 30)' // Bouncy return
    });
  });

  // Animated Edges effect
  let offset = 0;
  setInterval(() => {
    offset = (offset + 1) % 12;
    cy.edges().style('line-dash-offset', offset);
  }, 50);

  // Click handler for nodes
  cy.on('tap', 'node', function (evt) {
    const node = evt.target;
    const info = node.data('info');
    if (info) {
      appendBotMessage(node.data('label') + ": " + info);
    }
  });

  // Chatbot Logic
  const chatInput = document.getElementById('chat-input');
  const chatBtn = document.getElementById('chat-btn');
  const chatMessages = document.getElementById('chat-messages');

  function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'message user-msg';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'message bot-msg';
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleChat() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    chatInput.value = '';

    // Simple keyword logic
    setTimeout(() => {
      if (text.includes('호랑이')) {
        appendBotMessage('호랑이는 식육목(Carnivora)에 속하는 강력한 포유류예요! 🐯');
      } else if (text.includes('안녕')) {
        appendBotMessage('안녕! 나는 포유류의 RDF 구조를 알려주는 친구야! 지도의 노드들을 클릭하거나 궁금한 걸 물어봐 🐾');
      } else if (text.includes('RDF') || text.includes('지도') || text.includes('구조')) {
        appendBotMessage('이 지도는 RDF 형식으로 되어 있어! 분홍색은 클래스, 파란색은 하위 클래스, 노란색은 실제 동물(인스턴스), 초록색은 특징을 나타내! 드래그도 해봐! 😊');
      } else if (text.includes('특징') || text.includes('포유류')) {
        appendBotMessage('포유류는 젖을 먹이고, 털이 있으며, 온혈 동물이라는 중요한 특징이 있어! 지도에서 초록색 육각형을 찾아봐!');
      } else {
        appendBotMessage('음... 그건 잘 모르겠지만, 호랑이, 고래, 코끼리에 대해 물어보거나 "구조"에 대해 물어봐줘! 😊');
      }
    }, 600);
  }

  chatBtn.addEventListener('click', handleChat);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleChat();
  });

  // Modal Logic
  const modal = document.getElementById('category-modal');
  const modalBody = document.getElementById('modal-body');

  const categoryContent = {
    mammals: {
      title: '🧸 포유류 (Mammals)',
      desc: '포유류는 새끼를 낳아 엄마의 젖을 먹고 자라는 동물이에요. 몸이 털로 덮여 있고 체온을 일정하게 유지할 수 있답니다!',
      examples: [
        { name: '강아지', url: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=300&q=80' },
        { name: '코끼리', url: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    birds: {
      title: '🦅 조류 (Birds)',
      desc: '조류는 몸이 깃털로 덮여 있고 날개가 있어요. 알을 낳아서 번식하며, 부리가 있어 먹이를 먹는답니다! 하늘을 나는 친구들이 많아요.',
      examples: [
        { name: '앵무새', url: 'https://images.unsplash.com/photo-1552728089-57bdde30ebd3?auto=format&fit=crop&w=300&q=80' },
        { name: '부엉이', url: 'https://images.unsplash.com/photo-1543501538-406cb4053896?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    fish: {
      title: '🐟 어류 (Fish)',
      desc: '어류는 물속에서 일생을 보내는 동물이에요. 지느러미로 헤엄치고 아가미로 숨을 쉰답니다. 대부분 몸이 비늘로 덮여 있어요!',
      examples: [
        { name: '금붕어', url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=300&q=80' },
        { name: '상어', url: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&w=300&q=80' }
      ]
    },
    insects: {
      title: '🐝 곤충 (Insects)',
      desc: '곤충은 몸이 머리, 가슴, 배의 세 부분으로 나뉘어 있어요. 다리가 6개인 것이 특징이며, 딱딱한 껍질로 몸을 보호한답니다.',
      examples: [
        { name: '나비', url: 'https://images.unsplash.com/photo-1543160431-a20c3547f4f6?auto=format&fit=crop&w=300&q=80' },
        { name: '무당벌레', url: 'https://images.unsplash.com/photo-1536640103131-0775d78af302?auto=format&fit=crop&w=300&q=80' }
      ]
    }
  };

  // KDC Book Data (490 Series: Zoology)
  const bookData = [
    {
      title: '정글의 왕 호랑이와 친구들',
      author: '김동물 저',
      kdc: '490',
      category: 'mammals',
      desc: '호랑이의 생태와 포유류 친구들을 재미있게 소개합니다.',
      emoji: '🐯'
    },
    {
      title: '하늘을 나는 새들의 비밀',
      author: '이날개 저',
      kdc: '492',
      category: 'birds',
      desc: '독수리부터 앵무새까지, 조류의 놀라운 비행 원리!',
      emoji: '🦅'
    },
    {
      title: '깊은 바다 속 물고기 이야기',
      author: '박바다 저',
      kdc: '494',
      category: 'fish',
      desc: '화려한 산호초와 무서운 상어들이 사는 어류의 세계.',
      emoji: '🐟'
    },
    {
      title: '부지런한 개미와 곤충 나라',
      author: '최곤충 저',
      kdc: '495',
      category: 'insects',
      desc: '머리, 가슴, 배로 나뉜 신비한 곤충들의 생활 모습.',
      emoji: '🐜'
    },
    {
      title: '우리 아이 첫 포유류 백과',
      author: '자연연구소 편',
      kdc: '490.1',
      category: 'mammals',
      desc: '초등학생 눈높이에 맞춘 쉽고 재미있는 포유류 백과사전.',
      emoji: '🐘'
    },
    {
      title: '밤에 활동하는 부영이와 친구들',
      author: '야행성 저',
      kdc: '492.5',
      category: 'birds',
      desc: '밤하늘을 지키는 올빼미와 부엉이의 모든 것.',
      emoji: '🦉'
    }
  ];

  function renderBooks() {
    const bookGrid = document.getElementById('book-grid');
    bookGrid.innerHTML = bookData.map(book => `
      <div class="book-card fade-in">
        <div class="book-cover">
          <span>${book.emoji}</span>
          <div class="kdc-tag">KDC ${book.kdc}</div>
        </div>
        <div class="book-info">
          <h4>${book.title}</h4>
          <p class="book-author">${book.author}</p>
          <p class="book-description">${book.desc}</p>
        </div>
      </div>
    `).join('');
  }

  window.scrollToSection = function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.showCategory = function (id) {
    const data = categoryContent[id];
    modalBody.innerHTML = `
      <h2 class="modal-detail-title">${data.title}</h2>
      <p class="modal-description">${data.desc}</p>
      <h3>✨ 예시 친구들</h3>
      <div class="example-images">
        ${data.examples.map(ex => `
          <div class="example-img-wrapper">
            <img src="${ex.url}" alt="${ex.name}">
            <p>${ex.name}</p>
          </div>
        `).join('')}
      </div>
    `;
    modal.style.display = 'flex';
  };

  window.hideModal = function () {
    modal.style.display = 'none';
  };

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target == modal) {
      hideModal();
    }
  };

  // Initial greeting
  setTimeout(() => {
    appendBotMessage('안녕! 동물 탐험대에 온 걸 환영해! 궁금한 게 있으면 물어봐! 🦁');
    renderBooks(); // Load books
  }, 1000);
});
