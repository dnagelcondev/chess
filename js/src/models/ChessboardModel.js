define([
    'backbone'
], function (
    Backbone
    ) {
    var ChessboardModel = Backbone.Model.extend({

        urlRoot: function () {
            return "api/chess";
        },

        defaults: {
            currentPlayer: "Red"
        },

        initialize: function() {
            console.log('initialize this chessboard');

        },

        isInCheck: function() {
          return null;
        },

        getPieceAtPosition: function (position) {
            return "-";
        },

        movePiece: function(positionFrom, positionTo) {
            return null;
        }


    });

    return ChessboardModel;
})
