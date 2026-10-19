(function(){
    let func = new RegisteredFunction({
        name: "commentText",
        description: "Use this function if you are asked to comment or explain anything.",
        parameters: {
          type: "object",
          properties: {
            prompt: {
              type: "string",
              description: "The instruction for what to explain or comment about the text.",
            },
            type: {
              type: "string",
              enum: ["comment", "footnote"],
              description: "Whether to add as a comment or as a footnote.",
              default: "comment",
            },
          },
          required: ["prompt"],
        },
        examples: [
          {
            prompt: "Explain this text",
            arguments: { prompt: "Explain this text", type: "comment" },
          },
          {
            prompt: "Add a footnote to selected text",
            arguments: { prompt: "Add a footnote to this text", type: "footnote" },
          },
          {
            prompt: "Comment on this text",
            arguments: { prompt: "Comment this text" },
          },
        ],
    });

    func.call = async function (params) {
        let text = await Asc.Editor.callCommand(function () {
          let doc = Api.GetDocument();
          let range = doc.GetRangeBySelect();
          let text = range ? range.GetText() : "";
          if (!text) {
            text = doc.GetCurrentWord();
            doc.SelectCurrentWord();
          }
          return text;
        })

        let argPrompt = params.prompt + ":\n" + text;

        let requestEngine = AI.Request.create(AI.ActionType.Chat);
        if (!requestEngine) return;

                // Insert as a comment
        let result = await requestEngine.chatRequest(
            argPrompt,
            false,
            async function (data) {
            if (!data) return;
            Asc.scope.data = data;
            Asc.scope.model = requestEngine.modelUI.name;
            await Asc.Editor.callCommand(function () {
                let range = Api.GetDocument().GetRangeBySelect();
                let comment = range.AddComment(
                Asc.scope.data,
                Asc.scope.model,
                "uid" + Asc.scope.model,
                );
                Api.GetDocument().ShowComment([comment.GetId()]);
            });
            }
        );
    };
})();