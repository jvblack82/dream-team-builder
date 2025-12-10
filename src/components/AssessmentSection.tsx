import { ClipboardCheck, Smile, BarChart } from 'lucide-react';

const AssessmentSection = () => {
  const assessmentItems = [
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      iconBg: "bg-blue-100 text-blue-600",
      title: "1. The Operational Audit",
      desc: "Are your systems supporting your team, or relying on 'Heroism' where people burn out covering gaps?",
    },
    {
      icon: <Smile className="w-5 h-5" />,
      iconBg: "bg-purple-100 text-purple-600",
      title: "2. The Cultural Diagnostic",
      desc: "Using the 5i's Framework, we identify the hidden motivations. Why do they actually show up?",
    },
    {
      icon: <BarChart className="w-5 h-5" />,
      iconBg: "bg-culture/10 text-culture",
      title: "3. The Leadership Check",
      desc: "Are you running a 'Rules-Based' (Bottleneck) or 'Values-Based' (Scalable) organization?",
    },
  ];

  const deliverables = [
    { label: "Duration", value: "2-3 Weeks" },
    { label: "Format", value: "In-person & Digital Analysis" },
    { label: "Outcome", value: "Full Strategic Report" },
  ];

  return (
    <section id="assessment" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most consultants hand you a 50-page PDF that collects dust. We come in
            and do a diagnostic that tells you exactly where you are winning and
            where you are bleeding efficiency.
          </p>
        </div>

        <div className="bg-secondary rounded-3xl p-1 lg:p-12 border border-border shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 lg:p-0">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                The Core Offer
              </div>
              <h3 className="text-3xl font-bold mb-8 text-foreground">
                The Dreamscope 3-Pronged Assessment
              </h3>
              <ul className="space-y-6">
                {assessmentItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full ${item.iconBg} flex items-center justify-center shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border flex flex-col justify-center">
              <h4 className="text-center font-bold text-foreground mb-2">
                The Deliverable
              </h4>
              <p className="text-center text-muted-foreground text-sm mb-8">
                A clear, actionable roadmap to fix the "Monday Effect" immediately.
              </p>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm border-b border-border py-3"
                  >
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:opacity-90 transition-colors shadow-elegant">
                Schedule Strategy Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
