module.exports = {
  meta: {
    docs: {
      description: "弹窗建议",
    },
  },
  create: function (context) {
    return {
      MemberExpression: (node) => {
        if (node.object.name === 'Modal' && node.property.name === 'confirm') {
          context.report({
            node,
            loc: node.loc,
            message: "Modal.confirm可能会导致确认按钮显示未英文，建议使用showConfirm方法。",
          });
        }
      },
    };
  },
};
