module.exports = {

      dashboard:`SELECT
      'General'                   tab_name,
      'General Info'              section_name,
      COUNT(DISTINCT dl1.case_id) cases
  FROM
      dqt_level_1     dl1,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl1.discrepancy_id
      AND dd.category_id = 3
      AND dl1.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'General'                   tab_name,
      'Follow-up Info'            section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 2
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'General'                   tab_name,
      'Reporter Info'             section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 10
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Patient'                   tab_name,
      'Case Death Info'           section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 1
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Patient'                   tab_name,
      'Case Neonates Info'        section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 4
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Patient'                   tab_name,
      'Patient History Info'      section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 6
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Patient'                   tab_name,
      'Patient Lab Data Info'     section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 7
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Product'                   tab_name,
      'Product Info'              section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 8
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Product'                   tab_name,
      'Product Indication Info'   section_name,
      COUNT(DISTINCT dl3.case_id) cases
  FROM
      dqt_level_3     dl3,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl3.discrepancy_id
      AND dd.category_id = 11
      AND dl3.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Product'                   tab_name,
      'Product Dose Info'         section_name,
      COUNT(DISTINCT dl3.case_id) cases
  FROM
      dqt_level_3     dl3,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl3.discrepancy_id
      AND dd.category_id = 9
      AND dl3.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Event'                     tab_name,
      'Event Info'                section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 5
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Analysis'                  tab_name,
      'Analysis Info'             section_name,
      COUNT(DISTINCT dl1.case_id) cases
  FROM
      dqt_level_1     dl1,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl1.discrepancy_id
      AND dd.category_id = 17
      AND dl1.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )
  UNION ALL
  SELECT
      'Regulatory Reports'        tab_name,
      'Submission Info'           section_name,
      COUNT(DISTINCT dl2.case_id) cases
  FROM
      dqt_level_2     dl2,
      dqt_discrepancy dd
  WHERE
          dd.discrepancy_id = dl2.discrepancy_id
      AND dd.category_id = 13
      AND dl2.execution_id = (
          SELECT
              MAX(execution_id)
          FROM
              dqt_execution_log
          WHERE
                  executed_by = :p_user_id
              AND deleted IS NULL
      )`

}