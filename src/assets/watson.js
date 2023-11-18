
  window.watsonAssistantChatOptions = {
    integrationID: "bc2f4d1d-16e6-4dd8-8dbd-b782ead070b6", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "3cad13a0-f806-46d1-8597-12dbfe763a8f", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
