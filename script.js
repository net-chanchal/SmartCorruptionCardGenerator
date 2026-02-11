const PARTY_NAME = "Chanda Party | ";

// Data Structure for Card Categories and Versions
const cardThemes = [
    {
        category: "🔴 দুর্নীতি / লুটপাট থিম",
        versions: [
            { name: "Black Card – দেশ চুরির লাইসেন্স", id: "loot_black", gradient: "bg-gradient-to-r from-gray-900 via-black to-gray-800", icon: "fa-mask" },
            { name: "Elite – চাঁদাবাজির গোল্ডেন পাস", id: "loot_elite", gradient: "bg-gradient-to-r from-purple-900 to-indigo-900", icon: "fa-crown" },
            { name: "Gold – হাজার কোটি টাকার গ্যারান্টি", id: "loot_gold", gradient: "bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700", icon: "fa-coins", textColor: "text-black" },
            { name: "Royal – রিজার্ভ খালি করার চাবি", id: "loot_royal", gradient: "bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950", icon: "fa-gem" },
            { name: "Shadow – পাচার হওয়া টাকার ভল্ট", id: "loot_shadow", gradient: "bg-gradient-to-br from-gray-800 to-black", icon: "fa-user-secret" },
            { name: "Prime – কালো টাকা সাদা করার মেশিন", id: "loot_prime", gradient: "bg-gradient-to-r from-slate-900 to-slate-800", icon: "fa-money-bill-wave" },
            { name: "Power – টেন্ডারবাজির একক ক্ষমতা", id: "loot_power", gradient: "bg-gradient-to-r from-red-900 to-red-950", icon: "fa-fist-raised" },
            { name: "Vault – জনগণের পকেট কাটার যন্ত্র", id: "loot_vault", gradient: "bg-gradient-to-r from-emerald-900 to-gray-900", icon: "fa-dungeon" }
        ]
    },
    {
        category: "👨‍👩‍👧‍👦 ফ্যামিলি / সিন্ডিকেট থিম",
        versions: [
            { name: "Family Card – বাপ-বেটার জমিদারী", id: "fam_basic", gradient: "bg-gradient-to-r from-teal-700 to-teal-900", icon: "fa-users" },
            { name: "Dynasty – রাজতন্ত্রের নতুন রূপ", id: "fam_dynasty", gradient: "bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500", icon: "fa-chess-king", textColor: "text-black" },
            { name: "Bloodline – উত্তরাধিকার সূত্রে দুর্নীতি", id: "fam_blood", gradient: "bg-gradient-to-r from-red-800 to-red-900", icon: "fa-dna" },
            { name: "Legacy – হাওয়া ভবনের উত্তরাধিকার", id: "fam_legacy", gradient: "bg-gradient-to-r from-amber-700 to-amber-900", icon: "fa-scroll" },
            { name: "Clan – স্বজনপ্রীতির সেরা উদাহরণ", id: "fam_clan", gradient: "bg-gradient-to-r from-indigo-800 to-purple-900", icon: "fa-shield-alt" },
            { name: "Empire – দুর্নীতির সাম্রাজ্য", id: "fam_empire", gradient: "bg-gradient-to-r from-yellow-700 to-yellow-900", icon: "fa-landmark" },
            { name: "Syndicate – বাজার সিন্ডিকেটের গডফাদার", id: "fam_syndicate", gradient: "bg-gradient-to-r from-green-800 to-gray-900", icon: "fa-handshake" },
            { name: "Cartel – মাফিয়া তন্ত্রের প্রতীক", id: "fam_cartel", gradient: "bg-gradient-to-r from-stone-800 to-stone-950", icon: "fa-skull-crossbones" },
            { name: "Condom – স্ক্যান্ডাল প্রোটেকশন শিল্ড", id: "fam_condom", gradient: "bg-gradient-to-r from-pink-700 to-rose-900", icon: "fa-shield-virus" }
        ]
    },
    {
        category: "🌾 কৃষি / গ্রামীণ থিম (স্যাটায়ার)",
        versions: [
            { name: "Agro Card – সারের দামে আগুন", id: "agro_loot", gradient: "bg-gradient-to-r from-green-700 to-green-900", icon: "fa-tractor" },
            { name: "Krishi Elite – কৃষকের পেটে লাথি", id: "agro_elite", gradient: "bg-gradient-to-r from-lime-700 to-green-800", icon: "fa-leaf" },
            { name: "Farmer Gold – ভর্তুকি চুরির কার্ড", id: "agro_gold", gradient: "bg-gradient-to-r from-yellow-500 to-green-600", icon: "fa-wheat" },
            { name: "Rural Shadow – গ্রাম লুটে শহর ভোগ", id: "agro_shadow", gradient: "bg-gradient-to-r from-stone-600 to-stone-800", icon: "fa-cloud-moon" },
            { name: "Harvest Black – ফসলের লাভ মধ্যস্বত্বভোগীর", id: "agro_black", gradient: "bg-gradient-to-r from-gray-800 via-green-900 to-black", icon: "fa-sickle" }
        ]
    },
    {
        category: "🧠 ব্যঙ্গাত্মক (Satirical)",
        versions: [
            { name: "Corrupt+ – ঘুষ ছাড়া ফাইল নড়ে না", id: "sat_corrupt", gradient: "bg-gradient-to-r from-red-700 via-orange-900 to-red-900", icon: "fa-biohazard" },
            { name: "Dirty Money – রক্তচোষা মানিব্যাগ", id: "sat_dirty", gradient: "bg-gradient-to-r from-emerald-900 via-gray-800 to-black", icon: "fa-trash-alt" },
            { name: "Power Loot – খাম্বা ও লোডশেডিং বাণিজ্য", id: "sat_power", gradient: "bg-gradient-to-r from-orange-700 to-red-800", icon: "fa-bolt" },
            { name: "Mafia Card – আইনের ঊর্ধ্বে আমরা", id: "sat_mafia", gradient: "bg-gradient-to-r from-gray-900 via-red-900 to-black", icon: "fa-hat-cowboy" },
            { name: "Shadow State – প্যারালাল সরকার", id: "sat_state", gradient: "bg-gradient-to-r from-slate-800 to-gray-900", icon: "fa-building" },
            { name: "Deep State – অদৃশ্য হাতের ইশারা", id: "sat_deep", gradient: "bg-gradient-to-r from-indigo-950 to-black", icon: "fa-eye" }
        ]
    }
];

// DOM Elements
const cardVersionSelect = document.getElementById('cardVersion');
const cardNameInput = document.getElementById('cardName');
const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvvInput = document.getElementById('cardCvv');
const downloadBtn = document.getElementById('downloadBtn');
const regenerateBtn = document.getElementById('regenerateBtn');

const cardPreview = document.getElementById('cardPreview');
const previewName = document.getElementById('previewName');
const previewNumber = document.getElementById('previewNumber');
const previewExpiry = document.getElementById('previewExpiry');
const bankLogo = document.getElementById('bankLogo');
const cardWatermark = document.getElementById('cardWatermark');

// Initialization
function init() {
    populateThemes();
    generateRandomDetails();
    setupEventListeners();
}

// Generate Random Details
function generateRandomDetails() {
    // Generate 16 digit number
    let num = '';
    for (let i = 0; i < 16; i++) {
        num += Math.floor(Math.random() * 10);
    }
    const formattedNum = formatCardNumber(num);
    
    // Generate Expiry
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = String(Math.floor(Math.random() * 6) + 24); // 24-29
    const expiry = `${month}/${year}`;
    
    // Generate CVV
    const cvv = String(Math.floor(Math.random() * 900) + 100);

    // Update Inputs
    cardNumberInput.value = formattedNum;
    cardExpiryInput.value = expiry;
    cardCvvInput.value = cvv;

    // Update Preview
    previewNumber.textContent = formattedNum;
    previewExpiry.textContent = expiry;
}

// Populate Theme Dropdown
function populateThemes() {
    cardThemes.forEach(category => {
        const group = document.createElement('optgroup');
        group.label = category.category;
        
        category.versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version.id;
            option.textContent = version.name;
            option.dataset.gradient = version.gradient;
            option.dataset.icon = version.icon;
            option.dataset.textColor = version.textColor || 'text-white';
            group.appendChild(option);
        });
        
        cardVersionSelect.appendChild(group);
    });

    // Trigger initial theme set
    updateTheme();
}

// Update Card Theme
function updateTheme() {
    const selectedOption = cardVersionSelect.options[cardVersionSelect.selectedIndex];
    if (!selectedOption) return;

    const gradientClass = selectedOption.dataset.gradient;
    const textColorClass = selectedOption.dataset.textColor;
    const iconClass = selectedOption.dataset.icon;
    
    // Parse Name and Edition
    // Expected format: "Name – Edition"
    const fullText = PARTY_NAME + selectedOption.textContent;
    let cardName = fullText;
    let editionText = "";

    if (fullText.includes('–')) {
        const parts = fullText.split('–');
        cardName = parts[0].trim();
        editionText = parts[1].trim();
    } else if (fullText.includes('-')) { // Fallback for hyphen
        const parts = fullText.split('-');
        cardName = parts[0].trim();
        editionText = parts[1].trim();
    } else {
        // Fallback if no separator found, try to guess or leave empty
        // Maybe take the last word? No, let's just leave it empty or repeat name
        cardName = fullText;
        editionText = ""; 
    }

    // Reset classes
    cardPreview.className = `relative w-[400px] h-[250px] rounded-2xl p-6 shadow-2xl transition-all duration-500 select-none overflow-hidden card-shadow ${gradientClass} ${textColorClass}`;
    
    // Update "Bank" Logo text
    bankLogo.textContent = cardName.toUpperCase();

    // Update Watermark
    cardWatermark.textContent = editionText;
    // Adjust watermark color based on text color (if text is black, watermark should be dark too)
    if (textColorClass === 'text-black') {
         cardWatermark.className = "text-black opacity-20 text-5xl font-bold whitespace-nowrap transform -rotate-12 select-none";
    } else {
         cardWatermark.className = "text-white opacity-20 text-5xl font-bold whitespace-nowrap transform -rotate-12 select-none";
    }
}

// Format Card Number (groups of 4)
function formatCardNumber(value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(' ');
    } else {
        return value;
    }
}

// Event Listeners
function setupEventListeners() {
    // Theme Change
    cardVersionSelect.addEventListener('change', updateTheme);

    // Regenerate Button
    regenerateBtn.addEventListener('click', generateRandomDetails);

    // Name Input
    cardNameInput.addEventListener('input', (e) => {
        previewName.textContent = e.target.value || 'YOUR NAME';
    });

    // Card Number Input with Formatting
    cardNumberInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, ''); // Remove non-digits
        val = val.substring(0, 16); // Limit to 16 digits
        e.target.value = formatCardNumber(val);
        previewNumber.textContent = e.target.value || '0000 0000 0000 0000';
    });

    // Expiry Input with Formatting
    cardExpiryInput.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 2) {
            val = val.substring(0, 2) + '/' + val.substring(2, 4);
        }
        e.target.value = val;
        previewExpiry.textContent = val || 'MM/YY';
    });

    // Download Functionality
    downloadBtn.addEventListener('click', () => {
        // Show loading state (optional)
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> জেনারেট হচ্ছে...';
        
        // Use html2canvas
        html2canvas(cardPreview, {
            scale: 3, // Higher resolution
            backgroundColor: null, 
            useCORS: true,
            logging: false,
            allowTaint: true,
            onclone: (clonedDoc) => {
                // Ensure text is fully visible in clone
                const clonedName = clonedDoc.getElementById('previewName');
                if (clonedName) {
                     clonedName.style.overflow = 'visible';
                     clonedName.style.whiteSpace = 'normal';
                }
            }
        }).then(canvas => {
            const link = document.createElement('a');
            const cardName = cardVersionSelect.options[cardVersionSelect.selectedIndex].text.split('–')[0].trim();
            link.download = `${cardName.replace(/\s+/g, '_')}_Card.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            
            // Restore button text
            downloadBtn.innerHTML = originalText;
        }).catch(err => {
            console.error("Download failed:", err);
            alert("দুঃখিত, কার্ডটি ডাউনলোড করা যায়নি।");
            downloadBtn.innerHTML = originalText;
        });
    });
}

// Run
init();