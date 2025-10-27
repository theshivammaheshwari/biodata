export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Decorative Border Container */}
        <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden">
          {/* Golden Border */}
          <div className="absolute inset-0 border-8 border-amber-400 rounded-lg pointer-events-none"></div>
          <div className="absolute inset-3 border-4 border-blue-700 rounded-lg pointer-events-none"></div>

          {/* Corner Stars */}
          <div className="absolute top-4 left-4 w-8 h-8 text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute top-4 right-4 w-8 h-8 text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8 text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>

          <div className="relative z-10 p-12">
            {/* Header */}
            <div className="text-center mb-12 bg-gradient-to-r from-red-50 to-orange-50 py-8 px-6 rounded-lg shadow-lg border-4 border-red-700">
              <div className="text-4xl font-bold text-red-800 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                ॥ श्री गणेशाय नमः ॥
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-2">
                विवाह परिचय पत्र
              </div>
              <div className="text-2xl font-semibold text-blue-900">
                MARRIAGE BIODATA
              </div>
              <div className="mt-4 h-1 w-48 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
            </div>

            {/* Personal Details with Photo */}
            <div className="mb-10">
              <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg shadow-md">
                <h2 className="text-xl font-bold">व्यक्तिगत विवरण / PERSONAL DETAILS</h2>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-b-lg border-4 border-emerald-600">
                <div className="flex gap-8">
                  <div className="flex-1">
                    <div className="space-y-3">
                      <DetailRow label="Full Name" value="Shivam Maheshwari" bold />
                      <DetailRow label="Date of Birth" value="13th February, 1991" />
                      <DetailRow label="Time of Birth" value="04:30 AM" />
                      <DetailRow label="Age" value="34 Years" />
                      <DetailRow label="Height" value="5'10&quot;" />
                      <DetailRow label="Gotra" value="Khatod & Jhanwar" />
                      <DetailRow label="Caste" value="Maheshwari" />
                      <DetailRow label="Complexion" value="Fair" />
                      <DetailRow label="Marital Status" value="Unmarried" />
                    </div>
                  </div>
                  <div className="w-64">
                    <div className="border-8 border-amber-400 rounded-lg shadow-xl overflow-hidden bg-white p-2">
                      <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center rounded">
                        <img className="w-32 h-32 rounded-full object-cover" src="https://raw.githubusercontent.com/theshivammaheshwari/biodata/main/shivam.png" alt="Profile Picture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational Qualification */}
            <div className="mb-10">
              <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg shadow-md">
                <h2 className="text-xl font-bold">शैक्षणिक योग्यता / EDUCATIONAL QUALIFICATION</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-b-lg border-4 border-blue-600">
                <div className="space-y-3">
                  <EducationRow
                    degree="PhD (Pursuing)"
                    details="Computer Science from LNMIIT, Jaipur (Part-time)"
                  />
                  <EducationRow
                    degree="M.Tech"
                    details="Computer Science & Engineering from LNMIIT, Jaipur"
                  />
                  <EducationRow
                    degree="B.Tech"
                    details="Information Technology from Government Engineering College, Bikaner"
                  />
                  <EducationRow
                    degree="Current Position"
                    details="Technical Superintendent at LNMIIT, Jaipur"
                  />
                  <EducationRow
                    degree="Pay"
                    details="₹1,07,206.00 Per Month"
                  />
                </div>
              </div>
            </div>

            {/* Family Background */}
            <div className="mb-10">
              <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg shadow-md">
                <h2 className="text-xl font-bold">पारिवारिक विवरण / FAMILY BACKGROUND</h2>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-b-lg border-4 border-emerald-600">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <FamilyMember
                      relation="Father"
                      name="Shri Mathura Das Maheshwari"
                      occupation="Property Dealing & Advertising"
                      mobile="+91-9828088109"
                    />
                    <FamilyMember
                      relation="Mother"
                      name="Smt. Mamta Maheshwari"
                      occupation="Devoted Housewife"
                    />
                    <FamilyMember
                      relation="Elder Sister"
                      name="Madhuri Maheshwari"
                      occupation="Married to Sandeep Maheshwari (SBI)"
                    />
                    <FamilyMember
                      relation="Younger Sister"
                      name="Harsha Maheshwari"
                    />
                  </div>
                  <div className="space-y-4">
                    <FamilyMember
                      relation="Bade Chacha"
                      name="Dr. Rajendra Maheshwari"
                      occupation="Associate Professor (Music), Government JDB Girls College, Kota"
                    />
                    <FamilyMember
                      relation="Chote Chacha"
                      name="Mr. Chandra Prakash Gupta"
                      occupation="Artist, Devdas Arts, Chaura Rasta, Jaipur"
                    />
                    <FamilyMember
                      relation="Bade Mama"
                      name="Mr. Shiv Charan Maheshwari"
                      occupation="Business"
                    />
                    <FamilyMember
                      relation="Chote Mama"
                      name="Mr. Vikas Maheshwari"
                      occupation="Astrologer"
                    />
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t-2 border-emerald-300">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-red-800">Grandfather:</span> Late Shri Brij Mohan Ji Khatod <span className="italic">(Renowned Artist - Painting)</span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-bold text-red-800">Grandmother:</span> Late Smt. Shanti Devi
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-10">
              <div className="bg-blue-700 text-white text-center py-3 rounded-t-lg shadow-md">
                <h2 className="text-xl font-bold">संपर्क सूत्र / CONTACT DETAILS</h2>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-b-lg border-4 border-amber-500">
                <div className="space-y-3">
                  <ContactRow
                    label="Address"
                    value="E-127 Kataria Colony, Ram Nagar Sodala, Jaipur, Rajasthan - 302019"
                  />
                  <ContactRow
                    label="Father's Mobile"
                    value="+91-9828088109"
                  />
                  <ContactRow
                    label="Shivam's Mobile"
                    value="+91-9468955596"
                  />
                  <ContactRow
                    label="Email"
                    value="theshivammaheshwari@gmail.com"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center">
              <div className="h-1 w-64 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 mb-6"></div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-6 px-8 rounded-lg border-4 border-blue-700 shadow-lg">
                <p className="text-xl font-bold text-red-800 mb-2">
                  हम अपने सुपुत्र के लिए उच्च शिक्षित, संस्कारी परिवार से
                </p>
                <p className="text-xl font-bold text-red-800 mb-3">
                  उपयुक्त वधू की तलाश कर रहे हैं
                </p>
                <p className="text-lg italic text-blue-900">
                  We seek a suitable, well-educated bride from a cultured family
                </p>
              </div>
              <div className="h-1 w-64 mx-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex">
      <span className="font-bold text-blue-900 w-40">{label}</span>
      <span className="mx-2">:</span>
      <span className={bold ? "font-bold text-gray-900" : "text-gray-800"}>{value}</span>
    </div>
  );
}

function EducationRow({ degree, details }: { degree: string; details: string }) {
  return (
    <div className="flex">
      <span className="font-bold text-red-800 w-48">{degree}</span>
      <span className="mx-2">:</span>
      <span className="text-gray-800 font-semibold">{details}</span>
    </div>
  );
}

function FamilyMember({ relation, name, occupation, mobile }: { relation: string; name: string; occupation?: string; mobile?: string }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-red-600">
      <p className="font-bold text-red-800 text-sm">{relation}:</p>
      <p className="font-bold text-gray-900">{name}</p>
      {occupation && <p className="text-sm italic text-gray-700 mt-1">{occupation}</p>}
      {mobile && <p className="text-sm font-semibold text-blue-900 mt-1">Mobile: {mobile}</p>}
    </div>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex">
      <span className="font-bold text-blue-900 w-48">{label}</span>
      <span className="mx-2">:</span>
      <span className="text-gray-900 font-semibold">{value}</span>
    </div>
  );
}
