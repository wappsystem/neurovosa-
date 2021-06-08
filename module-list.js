(function(){
    var modules={
        "panel-main-neurovosa":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child-neurovosa":    			{url:"$H/m/panel-child.html"},
        "panel-export-screening":   {url:"$H/m/export/panel-export-screening.html",router:1},
        "panel-export-baseline":    {url:"$H/m/export/panel-export-baseline.html",router:1},
        "panel-export-3month":    {url:"$H/m/export/panel-export-3month.html",router:1},
        "export-data": {url:"$H/m/export/export-data.html",Table:"neurovosa-export",form_module:"export-form"},
        "export-form": {url:"$H/m/export/export-form.html",Table:"neurovosa-export"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"neurovosa-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-neurovosa",
                                            questionnaire_setup:"online-questionnaire-setup-neurovosa",
                                            online_questionnaire:"online-questionnaire-app-neurovosa",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"neurovosa-participant"},

        "online-questionnaire-setup-neurovosa": {url:"$H/m/oq-setup.html",Table:"neurovosa-participant"},
        "online-questionnaire-app-neurovosa":   {url:"$H/oq.html"},

        "notes":  		  	  			{url:"$H/m/library/notes.html"},
        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"neurovosa-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"neurovosa-notes"},

        "neurovosa-randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"neurovosa-randomisation-table",form_module:"neurovosa-randomisation-table-form"},
        "neurovosa-randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"neurovosa-randomisation-table"},
        "neurovosa-concom-medication-data":            {url:"$H/m/library/concom-medication-data.html",Table:"neurovosa-concom-medication",form_module:"neurovosa-concom-medication-form"},
        "neurovosa-concom-medication-form":            {url:"$H/m/library/concom-medication-form.html",Table:"neurovosa-concom-medication"},
        "neurovosa-adverse-event-data":                {url:"$H/m/library/adverse-event-data.html",Table:"neurovosa-adverse-event",form_module:"neurovosa-adverse-event-form"},
        "neurovosa-adverse-event-form":                {url:"$H/m/library/adverse-event-form.html",Table:"neurovosa-adverse-event"},

        "neurovosa-s-date-data":		                {url:"$H/m/library/date-data.html",Table:"neurovosa-s-date",form_module:"neurovosa-s-date-form"},
        "neurovosa-s-date-form":		                {url:"$H/m/library/date-form.html",Table:"neurovosa-s-date"},
        "neurovosa-s-screening-data":		                        {url:"$H/m/library/screening-data.html",Table:"neurovosa-s-screening",form_module:"neurovosa-s-screening-form"},
        "neurovosa-s-screening-form":		                {url:"$H/m/library/screening-form.html",Table:"neurovosa-s-screening"},

        "neurovosa-b-patient-background-data":		            {url:"$H/m/library/patient-background-data.html",Table:"neurovosa-b-patient-background",form_module:"neurovosa-b-patient-background-form"},
        "neurovosa-b-patient-background-form":		            {url:"$H/m/library/patient-background-form.html",Table:"neurovosa-b-patient-background"},
        "neurovosa-b-medical-history-data":		            {url:"$H/m/library/medical-history-data.html",Table:"neurovosa-b-medical-history",form_module:"neurovosa-b-medical-history-form"},
        "neurovosa-b-medical-history-form":		            {url:"$H/m/library/medical-history-form.html",Table:"neurovosa-b-medical-history"},
        "neurovosa-b-medications-data":		            {url:"$H/m/library/medications-data.html",Table:"neurovosa-b-medications",form_module:"neurovosa-b-medications-form"},
        "neurovosa-b-medications-form":		            {url:"$H/m/library/medications-form.html",Table:"neurovosa-b-medications"},
        "neurovosa-b-fina-data":		            {url:"$H/m/library/finapres-data.html",Table:"neurovosa-b-fina",form_module:"neurovosa-b-fina-form"},
        "neurovosa-b-fina-form":		            {url:"$H/m/library/finapres-form.html",Table:"neurovosa-b-fina"},
        "neurovosa-b-nirs-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-b-nirs",form_module:"neurovosa-b-nirs-form"},
        "neurovosa-b-nirs-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-b-nirs"},

        "neurovosa-b-pre-ksd-1-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-1-ksd",form_module:"neurovosa-b-pre-ksd-1-form"},
        "neurovosa-b-pre-ksd-1-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-1-ksd",task_name:"Karolinska Sleep Diary Day 1"},
        "neurovosa-b-pre-ksd-2-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-2-ksd",form_module:"neurovosa-b-pre-ksd-2-form"},
        "neurovosa-b-pre-ksd-2-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-2-ksd",task_name:"Karolinska Sleep Diary Day 2"},
        "neurovosa-b-pre-ksd-3-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-3-ksd",form_module:"neurovosa-b-pre-ksd-3-form"},
        "neurovosa-b-pre-ksd-3-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-3-ksd",task_name:"Karolinska Sleep Diary Day 3"},
        "neurovosa-b-pre-ksd-4-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-4-ksd",form_module:"neurovosa-b-pre-ksd-4-form"},
        "neurovosa-b-pre-ksd-4-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-4-ksd",task_name:"Karolinska Sleep Diary Day 4"},
        "neurovosa-b-pre-ksd-5-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-5-ksd",form_module:"neurovosa-b-pre-ksd-5-form"},
        "neurovosa-b-pre-ksd-5-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-5-ksd",task_name:"Karolinska Sleep Diary Day 5"},
        "neurovosa-b-pre-ksd-6-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-6-ksd",form_module:"neurovosa-b-pre-ksd-6-form"},
        "neurovosa-b-pre-ksd-6-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-6-ksd",task_name:"Karolinska Sleep Diary Day 6"},
        "neurovosa-b-pre-ksd-7-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-b-pre-7-ksd",form_module:"neurovosa-b-pre-ksd-7-form"},
        "neurovosa-b-pre-ksd-7-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-b-pre-7-ksd",task_name:"Karolinska Sleep Diary Day 7"},
        "neurovosa-b-pre-pvt-data":		            {url:"$H/m/library/pvt-data.html",Table:"neurovosa-b-pre-pvt",form_module:"neurovosa-b-pre-pvt-form"},
        "neurovosa-b-pre-pvt-form":		            {url:"$H/m/library/pvt-form.html",Table:"neurovosa-b-pre-pvt"},

        "neurovosa-b-pre-kss-data":		            {url:"$H/m/library/kss-data.html",Table:"neurovosa-b-pre-kss",form_module:"neurovosa-b-pre-kss-form"},
        "neurovosa-b-pre-kss-form":		            {url:"$H/m/library/kss-form.html",Table:"neurovosa-b-pre-kss",task_name:"KSS"},

        "neurovosa-b-pwa-data":		            {url:"$H/m/library/pwa-data.html",Table:"neurovosa-b-pwa",form_module:"neurovosa-b-pwa-form"},
        "neurovosa-b-pwa-form":		            {url:"$H/m/library/pwa-form.html",Table:"neurovosa-b-pwa"},
        "neurovosa-b-psggrr-data":		            {url:"$H/m/library/psggrr-data.html",Table:"neurovosa-b-psggrr",form_module:"neurovosa-b-psggrr-form",task_name:"Baseline - Grael Research PSG Report"},
        "neurovosa-b-psggrr-form":		            {url:"$H/m/library/psggrr-form.html",Table:"neurovosa-b-psggrr",task_name:"Baseline - Grael Research PSG Report"},
        "neurovosa-b-fina1-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-b-fina1",form_module:"neurovosa-b-fina1-form"},
        "neurovosa-b-fina1-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-b-fina1"},
        "neurovosa-b-fina2-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-b-fina2",form_module:"neurovosa-b-fina2-form"},
        "neurovosa-b-fina2-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-b-fina2"},
        "neurovosa-b-fina3-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-b-fina3",form_module:"neurovosa-b-fina3-form"},
        "neurovosa-b-fina3-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-b-fina3"},
        "neurovosa-b-nirs1-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-b-nirs1",form_module:"neurovosa-b-nirs1-form"},
        "neurovosa-b-nirs1-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-b-nirs1"},
        "neurovosa-b-nirs2-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-b-nirs2",form_module:"neurovosa-b-nirs2-form"},
        "neurovosa-b-nirs2-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-b-nirs2"},
        "neurovosa-b-nirs3-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-b-nirs3",form_module:"neurovosa-b-nirs3-form"},
        "neurovosa-b-nirs3-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-b-nirs3"},
        "neurovosa-b-vr1-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-b-vr1",form_module:"neurovosa-b-vr1-form"},
        "neurovosa-b-vr1-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-b-vr1"},
        "neurovosa-b-vr2-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-b-vr2",form_module:"neurovosa-b-vr2-form"},
        "neurovosa-b-vr2-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-b-vr2"},
        "neurovosa-b-vr3-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-b-vr3",form_module:"neurovosa-b-vr3-form"},
        "neurovosa-b-vr3-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-b-vr3"},

        "neurovosa-b-post-kss-data":		            {url:"$H/m/library/kss-data.html",Table:"neurovosa-b-post-kss",form_module:"neurovosa-b-post-kss-form"},
        "neurovosa-b-post-kss-form":		            {url:"$H/m/library/kss-form.html",Table:"neurovosa-b-post-kss",task_name:"KSS"},
        "neurovosa-b-post-pvt-data":		            {url:"$H/m/library/pvt-data.html",Table:"neurovosa-b-post-pvt",form_module:"neurovosa-b-post-pvt-form"},
        "neurovosa-b-post-pvt-form":		            {url:"$H/m/library/pvt-form.html",Table:"neurovosa-b-post-pvt"},
        "neurovosa-b-post-nback1-data":		        {url:"$H/m/neurocog/nback1-data.html",Table:"neurovosa-b-post-nback1",form_module:"neurovosa-b-post-nback1-form"},
        "neurovosa-b-post-nback1-form":		        {url:"$H/m/neurocog/nback1-form.html",Table:"neurovosa-b-post-nback1",task_name:"1 Back"},
        "neurovosa-b-post-nback2-data":		        {url:"$H/m/neurocog/nback2-data.html",Table:"neurovosa-b-post-nback2",form_module:"neurovosa-b-post-nback2-form"},
        "neurovosa-b-post-nback2-form":		        {url:"$H/m/neurocog/nback2-form.html",Table:"neurovosa-b-post-nback2",task_name:"2 Back"},
        "neurovosa-b-post-stroop-text-data":		    {url:"$H/m/neurocog/stroop-text-data.html",Table:"neurovosa-b-post-stroop-text",form_module:"neurovosa-b-post-stroop-text-form"},
        "neurovosa-b-post-stroop-text-form":		    {url:"$H/m/neurocog/stroop-text-form.html",Table:"neurovosa-b-post-stroop-text",task_name:"Stroop Text"},
        "neurovosa-b-post-stroop-colour-data":		{url:"$H/m/neurocog/stroop-colour-data.html",Table:"neurovosa-b-post-stroop-colour",form_module:"neurovosa-b-post-stroop-colour-form"},
        "neurovosa-b-post-stroop-colour-form":		{url:"$H/m/neurocog/stroop-colour-form.html",Table:"neurovosa-b-post-stroop-colour",task_name:"Stroop Colour"},
        "neurovosa-b-post-lct-data":		            {url:"$H/m/neurocog/letter-cancellation-data.html",Table:"neurovosa-b-post-lct",form_module:"neurovosa-b-post-lct-form"},
        "neurovosa-b-post-lct-form":		            {url:"$H/m/neurocog/letter-cancellation-form.html",Table:"neurovosa-b-post-lct",task_name:"LCT"},
        "neurovosa-b-post-ess-data":		            {url:"$H/m/library/ess-data.html",Table:"neurovosa-b-post-ess",form_module:"neurovosa-b-post-ess-form"},
        "neurovosa-b-post-ess-form":		            {url:"$H/m/library/ess-form.html",Table:"neurovosa-b-post-ess",task_name:"ESS"},
        "neurovosa-b-post-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"neurovosa-b-post-isi",form_module:"neurovosa-b-post-isi-form"},
        "neurovosa-b-post-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"neurovosa-b-post-isi",task_name:"ISI"},
        "neurovosa-b-post-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"neurovosa-b-post-psqi",form_module:"neurovosa-b-post-psqi-form"},
        "neurovosa-b-post-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"neurovosa-b-post-psqi",task_name:"PSQI"},
        "neurovosa-b-post-hads-data":		            {url:"$H/m/library/hads-data.html",Table:"neurovosa-b-post-hads",form_module:"neurovosa-b-post-hads-form"},
        "neurovosa-b-post-hads-form":		            {url:"$H/m/library/hads-form.html",Table:"neurovosa-b-post-hads",task_name:"HADS"},
        "neurovosa-b-post-aused-data":		            {url:"$H/m/library/aused-data.html",Table:"neurovosa-b-post-aused",form_module:"neurovosa-b-post-aused-form"},
        "neurovosa-b-post-aused-form":		            {url:"$H/m/library/aused-form.html",Table:"neurovosa-b-post-aused"},
        "neurovosa-b-post-wtar-data":		            {url:"$H/m/library/wtar-data.html",Table:"neurovosa-b-post-wtar",form_module:"neurovosa-b-post-wtar-form"},
        "neurovosa-b-post-wtar-form":		            {url:"$H/m/library/wtar-form.html",Table:"neurovosa-b-post-wtar"},

        "neurovosa-3m-pre-ksd-1-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-1-ksd",form_module:"neurovosa-3m-pre-ksd-1-form"},
        "neurovosa-3m-pre-ksd-1-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-1-ksd",task_name:"Karolinska Sleep Diary Day 1"},
        "neurovosa-3m-pre-ksd-2-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-2-ksd",form_module:"neurovosa-3m-pre-ksd-2-form"},
        "neurovosa-3m-pre-ksd-2-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-2-ksd",task_name:"Karolinska Sleep Diary Day 2"},
        "neurovosa-3m-pre-ksd-3-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-3-ksd",form_module:"neurovosa-3m-pre-ksd-3-form"},
        "neurovosa-3m-pre-ksd-3-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-3-ksd",task_name:"Karolinska Sleep Diary Day 3"},
        "neurovosa-3m-pre-ksd-4-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-4-ksd",form_module:"neurovosa-3m-pre-ksd-4-form"},
        "neurovosa-3m-pre-ksd-4-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-4-ksd",task_name:"Karolinska Sleep Diary Day 4"},
        "neurovosa-3m-pre-ksd-5-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-5-ksd",form_module:"neurovosa-3m-pre-ksd-5-form"},
        "neurovosa-3m-pre-ksd-5-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-5-ksd",task_name:"Karolinska Sleep Diary Day 5"},
        "neurovosa-3m-pre-ksd-6-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-6-ksd",form_module:"neurovosa-3m-pre-ksd-6-form"},
        "neurovosa-3m-pre-ksd-6-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-6-ksd",task_name:"Karolinska Sleep Diary Day 6"},
        "neurovosa-3m-pre-ksd-7-data":		            {url:"$H/m/library/ksd-data.html",Table:"neurovosa-3m-pre-7-ksd",form_module:"neurovosa-3m-pre-ksd-7-form"},
        "neurovosa-3m-pre-ksd-7-form":		            {url:"$H/m/library/ksd-form.html",Table:"neurovosa-3m-pre-7-ksd",task_name:"Karolinska Sleep Diary Day 7"},
        "neurovosa-3m-pre-pvt-data":		            {url:"$H/m/library/pvt-data.html",Table:"neurovosa-3m-pre-pvt",form_module:"neurovosa-3m-pre-pvt-form"},
        "neurovosa-3m-pre-pvt-form":		            {url:"$H/m/library/pvt-form.html",Table:"neurovosa-3m-pre-pvt"},
        "neurovosa-3m-pre-kss-data":		            {url:"$H/m/library/kss-data.html",Table:"neurovosa-3m-pre-kss",form_module:"neurovosa-3m-pre-kss-form"},
        "neurovosa-3m-pre-kss-form":		            {url:"$H/m/library/kss-form.html",Table:"neurovosa-3m-pre-kss",task_name:"KSS"},

        "neurovosa-3m-pwa-data":		            {url:"$H/m/library/pwa-data.html",Table:"neurovosa-3m-pwa",form_module:"neurovosa-3m-pwa-form"},
        "neurovosa-3m-pwa-form":		            {url:"$H/m/library/pwa-form.html",Table:"neurovosa-3m-pwa"},
        "neurovosa-3m-psggrr-data":		            {url:"$H/m/library/psggrr-data.html",Table:"neurovosa-3m-psggrr",form_module:"neurovosa-3m-psggrr-form",task_name:"Post 3 Month - Grael Research PSG Report"},
        "neurovosa-3m-psggrr-form":		            {url:"$H/m/library/psggrr-form.html",Table:"neurovosa-3m-psggrr",task_name:"Post 3 Month - Grael Research PSG Report"},
        "neurovosa-3m-fina1-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-3m-fina1",form_module:"neurovosa-3m-fina1-form"},
        "neurovosa-3m-fina1-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-3m-fina1"},
        "neurovosa-3m-fina2-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-3m-fina2",form_module:"neurovosa-3m-fina2-form"},
        "neurovosa-3m-fina2-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-3m-fina2"},
        "neurovosa-3m-fina3-data":		            {url:"$H/m/library/finapres-vr-data.html",Table:"neurovosa-3m-fina3",form_module:"neurovosa-3m-fina3-form"},
        "neurovosa-3m-fina3-form":		            {url:"$H/m/library/finapres-vr-form.html",Table:"neurovosa-3m-fina3"},
        "neurovosa-3m-nirs1-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-3m-nirs1",form_module:"neurovosa-3m-nirs1-form"},
        "neurovosa-3m-nirs1-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-3m-nirs1"},
        "neurovosa-3m-nirs2-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-3m-nirs2",form_module:"neurovosa-3m-nirs2-form"},
        "neurovosa-3m-nirs2-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-3m-nirs2"},
        "neurovosa-3m-nirs3-data":		            {url:"$H/m/library/nirs-data.html",Table:"neurovosa-3m-nirs3",form_module:"neurovosa-3m-nirs3-form"},
        "neurovosa-3m-nirs3-form":		            {url:"$H/m/library/nirs-form.html",Table:"neurovosa-3m-nirs3"},
        "neurovosa-3m-vr1-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-3m-vr1",form_module:"neurovosa-3m-vr1-form"},
        "neurovosa-3m-vr1-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-3m-vr1"},
        "neurovosa-3m-vr2-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-3m-vr2",form_module:"neurovosa-3m-vr2-form"},
        "neurovosa-3m-vr2-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-3m-vr2"},
        "neurovosa-3m-vr3-data":		            {url:"$H/m/library/vr-data.html",Table:"neurovosa-3m-vr3",form_module:"neurovosa-3m-vr3-form"},
        "neurovosa-3m-vr3-form":		            {url:"$H/m/library/vr-form.html",Table:"neurovosa-3m-vr3"},

        "neurovosa-3m-post-kss-data":		            {url:"$H/m/library/kss-data.html",Table:"neurovosa-3m-post-kss",form_module:"neurovosa-3m-post-kss-form"},
        "neurovosa-3m-post-kss-form":		            {url:"$H/m/library/kss-form.html",Table:"neurovosa-3m-post-kss",task_name:"KSS"},
        "neurovosa-3m-post-pvt-data":		            {url:"$H/m/library/pvt-data.html",Table:"neurovosa-3m-post-pvt",form_module:"neurovosa-3m-post-pvt-form"},
        "neurovosa-3m-post-pvt-form":		            {url:"$H/m/library/pvt-form.html",Table:"neurovosa-3m-pre-pvt"},
        "neurovosa-3m-post-nback1-data":		        {url:"$H/m/neurocog/nback1-data.html",Table:"neurovosa-3m-post-nback1",form_module:"neurovosa-3m-post-nback1-form"},
        "neurovosa-3m-post-nback1-form":		        {url:"$H/m/neurocog/nback1-form.html",Table:"neurovosa-3m-post-nback1",task_name:"1 Back"},
        "neurovosa-3m-post-nback2-data":		        {url:"$H/m/neurocog/nback2-data.html",Table:"neurovosa-3m-post-nback2",form_module:"neurovosa-3m-post-nback2-form"},
        "neurovosa-3m-post-nback2-form":		        {url:"$H/m/neurocog/nback2-form.html",Table:"neurovosa-3m-post-nback2",task_name:"2 Back"},
        "neurovosa-3m-post-stroop-text-data":		    {url:"$H/m/neurocog/stroop-text-data.html",Table:"neurovosa-3m-post-stroop-text",form_module:"neurovosa-3m-post-stroop-text-form"},
        "neurovosa-3m-post-stroop-text-form":		    {url:"$H/m/neurocog/stroop-text-form.html",Table:"neurovosa-3m-post-stroop-text",task_name:"Stroop Text"},
        "neurovosa-3m-post-stroop-colour-data":		    {url:"$H/m/neurocog/stroop-colour-data.html",Table:"neurovosa-3m-post-stroop-colour",form_module:"neurovosa-3m-post-stroop-colour-form"},
        "neurovosa-3m-post-stroop-colour-form":		    {url:"$H/m/neurocog/stroop-colour-form.html",Table:"neurovosa-3m-post-stroop-colour",task_name:"Stroop Colour"},
        "neurovosa-3m-post-lct-data":		            {url:"$H/m/neurocog/letter-cancellation-data.html",Table:"neurovosa-3m-post-lct",form_module:"neurovosa-3m-post-lct-form"},
        "neurovosa-3m-post-lct-form":		            {url:"$H/m/neurocog/letter-cancellation-form.html",Table:"neurovosa-3m-post-lct",task_name:"LCT"},
        "neurovosa-3m-post-ess-data":		            {url:"$H/m/library/ess-data.html",Table:"neurovosa-3m-post-ess",form_module:"neurovosa-3m-post-ess-form"},
        "neurovosa-3m-post-ess-form":		            {url:"$H/m/library/ess-form.html",Table:"neurovosa-3m-post-ess",task_name:"ESS"},
        "neurovosa-3m-post-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"neurovosa-3m-post-isi",form_module:"neurovosa-3m-post-isi-form"},
        "neurovosa-3m-post-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"neurovosa-3m-post-isi",task_name:"ISI"},
        "neurovosa-3m-post-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"neurovosa-3m-post-psqi",form_module:"neurovosa-3m-post-psqi-form"},
        "neurovosa-3m-post-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"neurovosa-3m-post-psqi",task_name:"PSQI"},
        "neurovosa-3m-post-hads-data":		            {url:"$H/m/library/hads-data.html",Table:"neurovosa-3m-post-hads",form_module:"neurovosa-3m-post-hads-form"},
        "neurovosa-3m-post-hads-form":		            {url:"$H/m/library/hads-form.html",Table:"neurovosa-3m-post-hads",task_name:"HADS"},
        "neurovosa-3m-post-aused-data":		            {url:"$H/m/library/aused-data.html",Table:"neurovosa-3m-post-aused",form_module:"neurovosa-3m-post-aused-form"},
        "neurovosa-3m-post-aused-form":		            {url:"$H/m/library/aused-form.html",Table:"neurovosa-3m-post-aused"},
        "neurovosa-3m-post-wtar-data":		            {url:"$H/m/library/wtar-data.html",Table:"neurovosa-3m-post-wtar",form_module:"neurovosa-3m-post-wtar-form"},
        "neurovosa-3m-post-wtar-form":		            {url:"$H/m/library/wtar-form.html",Table:"neurovosa-3m-post-wtar"},

        "neurovosa-e-wordpair-set1-practice":	        {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "neurovosa-e-wordpair-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "neurovosa-e-wordpair-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "neurovosa-e-wordpair-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "neurovosa-m-wordpair-set1":	                {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},

        "neurovosa-b-pre-word-pairs-set1-practice":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "neurovosa-b-pre-word-pairs-set1-trial1":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "neurovosa-b-pre-word-pairs-set1-trial2":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "neurovosa-b-pre-word-pairs-set1-trial3":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "neurovosa-b-pre-word-pairs-set1-trial4":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial4.html"},
        "neurovosa-b-pre-word-pairs-set1-trial5":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial5.html"},
        "neurovosa-b-pre-word-pairs-set1-data":	        {url:"$H/m/library/word-pairs-set1-data.html",Table:"neurovosa-b-pre-word-pairs-set1",form_module:"neurovosa-b-pre-word-pairs-set1-form"},
        "neurovosa-b-pre-word-pairs-set1-form":	        {url:"$H/m/library/word-pairs-set1-form.html",Table:"neurovosa-b-pre-word-pairs-set1"},
        "neurovosa-b-pre-finger-tapping-data":	        {url:"$H/m/neurocog/finger-tapping12-data.html",Table:"neurovosa-b-pre-finger-tapping",form_module:"neurovosa-b-pre-finger-tapping-form"},
        "neurovosa-b-pre-finger-tapping-form":	        {url:"$H/m/neurocog/finger-tapping12-form.html",Table:"neurovosa-b-pre-finger-tapping",task_name:"Finger Tapping"},

        "neurovosa-b-post-word-pairs-set1-morning":	    {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "neurovosa-b-post-word-pairs-set1-data":        {url:"$H/m/library/word-pairs-set1-data.html",Table:"neurovosa-b-post-word-pairs-set1",form_module:"neurovosa-b-post-word-pairs-set1-form"},
        "neurovosa-b-post-word-pairs-set1-form":        {url:"$H/m/library/word-pairs-set1-form.html",Table:"neurovosa-b-post-word-pairs-set1"},
        "neurovosa-b-post-finger-tapping-data":	        {url:"$H/m/neurocog/finger-tapping-data.html",Table:"neurovosa-b-post-finger-tapping",form_module:"neurovosa-b-post-finger-tapping-form"},
        "neurovosa-b-post-finger-tapping-form":	        {url:"$H/m/neurocog/finger-tapping-form.html",Table:"neurovosa-b-post-finger-tapping",Table2:"neurovosa-b-pre-finger-tapping",task_name:"Finger Tapping"},

        "neurovosa-3m-pre-word-pairs-set1-practice":	{url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "neurovosa-3m-pre-word-pairs-set1-trial1":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "neurovosa-3m-pre-word-pairs-set1-trial2":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "neurovosa-3m-pre-word-pairs-set1-trial3":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "neurovosa-3m-pre-word-pairs-set1-trial4":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial4.html"},
        "neurovosa-3m-pre-word-pairs-set1-trial5":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial5.html"},
        "neurovosa-3m-pre-word-pairs-set1-data":		{url:"$H/m/library/word-pairs-set1-data.html",Table:"neurovosa-3m-pre-word-pairs-set1",form_module:"neurovosa-3m-pre-word-pairs-set1-form"},
        "neurovosa-3m-pre-word-pairs-set1-form":		{url:"$H/m/library/word-pairs-set1-form.html",Table:"neurovosa-3m-pre-word-pairs-set1"},
        "neurovosa-3m-pre-finger-tapping-data":		    {url:"$H/m/neurocog/finger-tapping12-data.html",Table:"neurovosa-3m-pre-finger-tapping",form_module:"neurovosa-3m-pre-finger-tapping-form"},
        "neurovosa-3m-pre-finger-tapping-form":		    {url:"$H/m/neurocog/finger-tapping12-form.html",Table:"neurovosa-3m-pre-finger-tapping",task_name:"Finger Tapping"},

        "neurovosa-3m-post-word-pairs-set1-morning":	{url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "neurovosa-3m-post-word-pairs-set1-data":		{url:"$H/m/library/word-pairs-set1-data.html",Table:"neurovosa-3m-post-word-pairs-set1",form_module:"neurovosa-3m-post-word-pairs-set1-form"},
        "neurovosa-3m-post-word-pairs-set1-form":		{url:"$H/m/library/word-pairs-set1-form.html",Table:"neurovosa-3m-post-word-pairs-set1"},
        "neurovosa-3m-post-finger-tapping-data":		{url:"$H/m/neurocog/finger-tapping-data.html",Table:"neurovosa-3m-post-finger-tapping",form_module:"neurovosa-3m-post-finger-tapping-form"},
        "neurovosa-3m-post-finger-tapping-form":		{url:"$H/m/neurocog/finger-tapping-form.html",Table:"neurovosa-3m-post-finger-tapping",Table2:"neurovosa-3m-pre-finger-tapping",task_name:"Finger Tapping"},
   }
   for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
